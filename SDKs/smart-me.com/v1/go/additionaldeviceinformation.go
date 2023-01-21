package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type AdditionalDeviceInformation struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewAdditionalDeviceInformation(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *AdditionalDeviceInformation {
	return &AdditionalDeviceInformation{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AdditionalDeviceInformationGet - Gets the additional information (e.g. Firmware Version) about a device.
// Gets the additional information (e.g. Firmware Version) about a device.
func (s *AdditionalDeviceInformation) AdditionalDeviceInformationGet(ctx context.Context, request operations.AdditionalDeviceInformationGetRequest) (*operations.AdditionalDeviceInformationGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/AdditionalDeviceInformation/{id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.AdditionalDeviceInformationGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.AdditionalDeviceInformation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AdditionalDeviceInformation = out
		case utils.MatchContentType(contentType, `text/json`):
			var out *shared.AdditionalDeviceInformation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AdditionalDeviceInformation = out
		}
	}

	return res, nil
}
