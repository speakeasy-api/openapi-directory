package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type RoleMapper struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewRoleMapper(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *RoleMapper {
	return &RoleMapper{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteRealmGroupsIDRoleMappingsRealm - Delete realm-level role mappings
func (s *RoleMapper) DeleteRealmGroupsIDRoleMappingsRealm(ctx context.Context, request operations.DeleteRealmGroupsIDRoleMappingsRealmRequest) (*operations.DeleteRealmGroupsIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.DeleteRealmGroupsIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmUsersIDRoleMappingsRealm - Delete realm-level role mappings
func (s *RoleMapper) DeleteRealmUsersIDRoleMappingsRealm(ctx context.Context, request operations.DeleteRealmUsersIDRoleMappingsRealmRequest) (*operations.DeleteRealmUsersIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.DeleteRealmUsersIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappings - Get role mappings
func (s *RoleMapper) GetRealmGroupsIDRoleMappings(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRequest) (*operations.GetRealmGroupsIDRoleMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MappingsRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MappingsRepresentation = out
		}
	}

	return res, nil
}

// GetRealmGroupsIDRoleMappingsRealm - Get realm-level role mappings
func (s *RoleMapper) GetRealmGroupsIDRoleMappingsRealm(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRealmRequest) (*operations.GetRealmGroupsIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsRealmResponse{
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

// GetRealmGroupsIDRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
func (s *RoleMapper) GetRealmGroupsIDRoleMappingsRealmAvailable(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRealmAvailableRequest) (*operations.GetRealmGroupsIDRoleMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsRealmAvailableResponse{
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

// GetRealmGroupsIDRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
func (s *RoleMapper) GetRealmGroupsIDRoleMappingsRealmComposite(ctx context.Context, request operations.GetRealmGroupsIDRoleMappingsRealmCompositeRequest) (*operations.GetRealmGroupsIDRoleMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmGroupsIDRoleMappingsRealmCompositeResponse{
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

// GetRealmUsersIDRoleMappings - Get role mappings
func (s *RoleMapper) GetRealmUsersIDRoleMappings(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRequest) (*operations.GetRealmUsersIDRoleMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.MappingsRepresentation
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.MappingsRepresentation = out
		}
	}

	return res, nil
}

// GetRealmUsersIDRoleMappingsRealm - Get realm-level role mappings
func (s *RoleMapper) GetRealmUsersIDRoleMappingsRealm(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRealmRequest) (*operations.GetRealmUsersIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsRealmResponse{
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

// GetRealmUsersIDRoleMappingsRealmAvailable - Get realm-level roles that can be mapped
func (s *RoleMapper) GetRealmUsersIDRoleMappingsRealmAvailable(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRealmAvailableRequest) (*operations.GetRealmUsersIDRoleMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsRealmAvailableResponse{
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

// GetRealmUsersIDRoleMappingsRealmComposite - Get effective realm-level role mappings   This will recurse all composite roles to get the result.
func (s *RoleMapper) GetRealmUsersIDRoleMappingsRealmComposite(ctx context.Context, request operations.GetRealmUsersIDRoleMappingsRealmCompositeRequest) (*operations.GetRealmUsersIDRoleMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmUsersIDRoleMappingsRealmCompositeResponse{
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

// PostRealmGroupsIDRoleMappingsRealm - Add realm-level role mappings to the user
func (s *RoleMapper) PostRealmGroupsIDRoleMappingsRealm(ctx context.Context, request operations.PostRealmGroupsIDRoleMappingsRealmRequest) (*operations.PostRealmGroupsIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/groups/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmGroupsIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmUsersIDRoleMappingsRealm - Add realm-level role mappings to the user
func (s *RoleMapper) PostRealmUsersIDRoleMappingsRealm(ctx context.Context, request operations.PostRealmUsersIDRoleMappingsRealmRequest) (*operations.PostRealmUsersIDRoleMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/users/{id}/role-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmUsersIDRoleMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}
