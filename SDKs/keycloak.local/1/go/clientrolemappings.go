package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ClientRoleMappings struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewClientRoleMappings(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ClientRoleMappings {
	return &ClientRoleMappings{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteRealmGroupsIDRoleMappingsClientsClient - Delete client-level roles from user role mapping
func (s *ClientRoleMappings) DeleteRealmGroupsIDRoleMappingsClientsClient(ctx context.Context, request operations.DeleteRealmGroupsIDRoleMappingsClientsClientRequest) (*operations.DeleteRealmGroupsIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRealmGroupsIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersIDRoleMappingsClientsClient - Delete client-level roles from user role mapping
func (s *ClientRoleMappings) DeleteRealmUsersIDRoleMappingsClientsClient(ctx context.Context, request operations.DeleteRealmUsersIDRoleMappingsClientsClientRequest) (*operations.DeleteRealmUsersIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRealmUsersIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
func (s *ClientRoleMappings) GetRealmGroupsIDRoleMappingsClientsClient(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsClientsClientRequest) (*operations.GetRealmGroupsIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmGroupsIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
func (s *ClientRoleMappings) GetRealmGroupsIDRoleMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableRequest) (*operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/available", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmGroupsIDRoleMappingsClientsClientAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
func (s *ClientRoleMappings) GetRealmGroupsIDRoleMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeRequest) (*operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}/composite", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmGroupsIDRoleMappingsClientsClientCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsClientsClient - Get client-level role mappings for the user, and the app
func (s *ClientRoleMappings) GetRealmUsersIDRoleMappingsClientsClient(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsClientsClientRequest) (*operations.GetRealmUsersIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmUsersIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsClientsClientAvailable - Get available client-level roles that can be mapped to the user
func (s *ClientRoleMappings) GetRealmUsersIDRoleMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsClientsClientAvailableRequest) (*operations.GetRealmUsersIDRoleMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/available", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmUsersIDRoleMappingsClientsClientAvailableResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsClientsClientComposite - Get effective client-level role mappings   This recurses any composite roles
func (s *ClientRoleMappings) GetRealmUsersIDRoleMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsClientsClientCompositeRequest) (*operations.GetRealmUsersIDRoleMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}/composite", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRealmUsersIDRoleMappingsClientsClientCompositeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.RoleRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoleRepresentations = out
		}
	}

	return res, nil
}

// PostRealmGroupsIDRoleMappingsClientsClient - Add client-level roles to the user role mapping
func (s *ClientRoleMappings) PostRealmGroupsIDRoleMappingsClientsClient(ctx context.Context, request operations.PostRealmGroupsIDRoleMappingsClientsClientRequest) (*operations.PostRealmGroupsIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRealmGroupsIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDRoleMappingsClientsClient - Add client-level roles to the user role mapping
func (s *ClientRoleMappings) PostRealmUsersIDRoleMappingsClientsClient(ctx context.Context, request operations.PostRealmUsersIDRoleMappingsClientsClientRequest) (*operations.PostRealmUsersIDRoleMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/clients/{client}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRealmUsersIDRoleMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}
