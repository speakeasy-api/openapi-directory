package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type FastSendDeviceValues struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewFastSendDeviceValues(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *FastSendDeviceValues {
	return &FastSendDeviceValues{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// FastSendDeviceValuesGet - Force a device to send the data every second (if supported). This for about 30s.
//
//	Don't use this call to force a device to send the data every second for a longer time.
func (s *FastSendDeviceValues) FastSendDeviceValuesGet(ctx context.Context, request operations.FastSendDeviceValuesGetRequest) (*operations.FastSendDeviceValuesGetResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/api/FastSendDeviceValues/{id}", request.PathParams)

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

	res := &operations.FastSendDeviceValuesGetResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	}

	return res, nil
}
