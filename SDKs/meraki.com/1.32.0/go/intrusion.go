// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type intrusion struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newIntrusion(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *intrusion {
	return &intrusion{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// GetNetworkApplianceSecurityIntrusion - Returns all supported intrusion settings for an MX network
// Returns all supported intrusion settings for an MX network
func (s *intrusion) GetNetworkApplianceSecurityIntrusion(ctx context.Context, request operations.GetNetworkApplianceSecurityIntrusionRequest) (*operations.GetNetworkApplianceSecurityIntrusionResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/security/intrusion", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
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

	res := &operations.GetNetworkApplianceSecurityIntrusionResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetNetworkApplianceSecurityIntrusion200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetOrganizationApplianceSecurityIntrusion - Returns all supported intrusion settings for an organization
// Returns all supported intrusion settings for an organization
func (s *intrusion) GetOrganizationApplianceSecurityIntrusion(ctx context.Context, request operations.GetOrganizationApplianceSecurityIntrusionRequest) (*operations.GetOrganizationApplianceSecurityIntrusionResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/appliance/security/intrusion", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
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

	res := &operations.GetOrganizationApplianceSecurityIntrusionResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetOrganizationApplianceSecurityIntrusion200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateNetworkApplianceSecurityIntrusion - Set the supported intrusion settings for an MX network
// Set the supported intrusion settings for an MX network
func (s *intrusion) UpdateNetworkApplianceSecurityIntrusion(ctx context.Context, request operations.UpdateNetworkApplianceSecurityIntrusionRequest) (*operations.UpdateNetworkApplianceSecurityIntrusionResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/networks/{networkId}/appliance/security/intrusion", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "RequestBody", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

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

	res := &operations.UpdateNetworkApplianceSecurityIntrusionResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateNetworkApplianceSecurityIntrusion200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UpdateOrganizationApplianceSecurityIntrusion - Sets supported intrusion settings for an organization
// Sets supported intrusion settings for an organization
func (s *intrusion) UpdateOrganizationApplianceSecurityIntrusion(ctx context.Context, request operations.UpdateOrganizationApplianceSecurityIntrusionRequest) (*operations.UpdateOrganizationApplianceSecurityIntrusionResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/organizations/{organizationId}/appliance/security/intrusion", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request, "RequestBody", "json")
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

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

	res := &operations.UpdateOrganizationApplianceSecurityIntrusionResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UpdateOrganizationApplianceSecurityIntrusion200ApplicationJSONObject = out
		}
	}

	return res, nil
}
