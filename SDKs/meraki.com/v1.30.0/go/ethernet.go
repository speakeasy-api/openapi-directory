// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type ethernet struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newEthernet(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ethernet {
	return &ethernet{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// GetOrganizationWirelessDevicesEthernetStatuses - Endpoint to see power status for wireless devices
// Endpoint to see power status for wireless devices
func (s *ethernet) GetOrganizationWirelessDevicesEthernetStatuses(ctx context.Context, request operations.GetOrganizationWirelessDevicesEthernetStatusesRequest) (*operations.GetOrganizationWirelessDevicesEthernetStatusesResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/wireless/devices/ethernet/statuses", request.PathParams, nil)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	if err := utils.PopulateQueryParams(ctx, req, request.QueryParams, nil); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetOrganizationWirelessDevicesEthernetStatusesResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []operations.GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects = out
		}
	}

	return res, nil
}
