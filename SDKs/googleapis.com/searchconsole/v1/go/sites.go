// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type sites struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
	language       string
	sdkVersion     string
	genVersion     string
}

func newSites(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *sites {
	return &sites{
		defaultClient:  defaultClient,
		securityClient: securityClient,
		serverURL:      serverURL,
		language:       language,
		sdkVersion:     sdkVersion,
		genVersion:     genVersion,
	}
}

// WebmastersSitesAdd -  Adds a site to the set of the user's sites in Search Console.
func (s *sites) WebmastersSitesAdd(ctx context.Context, request operations.WebmastersSitesAddRequest, security operations.WebmastersSitesAddSecurity) (*operations.WebmastersSitesAddResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/webmasters/v3/sites/{siteUrl}", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	if err := utils.PopulateQueryParams(ctx, req, request, nil); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WebmastersSitesAddResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// WebmastersSitesDelete -  Removes a site from the set of the user's Search Console sites.
func (s *sites) WebmastersSitesDelete(ctx context.Context, request operations.WebmastersSitesDeleteRequest, security operations.WebmastersSitesDeleteSecurity) (*operations.WebmastersSitesDeleteResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/webmasters/v3/sites/{siteUrl}", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	if err := utils.PopulateQueryParams(ctx, req, request, nil); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WebmastersSitesDeleteResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// WebmastersSitesGet -  Retrieves information about specific site.
func (s *sites) WebmastersSitesGet(ctx context.Context, request operations.WebmastersSitesGetRequest, security operations.WebmastersSitesGetSecurity) (*operations.WebmastersSitesGetResponse, error) {
	baseURL := s.serverURL
	url, err := utils.GenerateURL(ctx, baseURL, "/webmasters/v3/sites/{siteUrl}", request, nil)
	if err != nil {
		return nil, fmt.Errorf("error generating URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	if err := utils.PopulateQueryParams(ctx, req, request, nil); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WebmastersSitesGetResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.WmxSite
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WmxSite = out
		}
	}

	return res, nil
}

// WebmastersSitesList -  Lists the user's Search Console sites.
func (s *sites) WebmastersSitesList(ctx context.Context, request operations.WebmastersSitesListRequest, security operations.WebmastersSitesListSecurity) (*operations.WebmastersSitesListResponse, error) {
	baseURL := s.serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/webmasters/v3/sites"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	if err := utils.PopulateQueryParams(ctx, req, request, nil); err != nil {
		return nil, fmt.Errorf("error populating query params: %w", err)
	}

	client := utils.ConfigureSecurityClient(s.defaultClient, security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	if httpRes == nil {
		return nil, fmt.Errorf("error sending request: no response")
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.WebmastersSitesListResponse{
		StatusCode:  httpRes.StatusCode,
		ContentType: contentType,
		RawResponse: httpRes,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SitesListResponse
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SitesListResponse = out
		}
	}

	return res, nil
}
