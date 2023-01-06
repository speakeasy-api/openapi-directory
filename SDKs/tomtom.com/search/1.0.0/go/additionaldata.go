package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type AdditionalData struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAdditionalData(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AdditionalData {
	return &AdditionalData{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetSearchVersionNumberAdditionalDataExt - Additional Data
func (s *AdditionalData) GetSearchVersionNumberAdditionalDataExt(ctx context.Context, request operations.GetSearchVersionNumberAdditionalDataExtRequest) (*operations.GetSearchVersionNumberAdditionalDataExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/additionalData.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberAdditionalDataExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}
