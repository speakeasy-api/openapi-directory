package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type ScopeMappings struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewScopeMappings(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ScopeMappings {
	return &ScopeMappings{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteRealmClientScopesIDScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
func (s *ScopeMappings) DeleteRealmClientScopesIDScopeMappingsClientsClient(ctx context.Context, request operations.DeleteRealmClientScopesIDScopeMappingsClientsClientRequest) (*operations.DeleteRealmClientScopesIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.DeleteRealmClientScopesIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientScopesIDScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
func (s *ScopeMappings) DeleteRealmClientScopesIDScopeMappingsRealm(ctx context.Context, request operations.DeleteRealmClientScopesIDScopeMappingsRealmRequest) (*operations.DeleteRealmClientScopesIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.DeleteRealmClientScopesIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsIDScopeMappingsClientsClient - Remove client-level roles from the client’s scope.
func (s *ScopeMappings) DeleteRealmClientsIDScopeMappingsClientsClient(ctx context.Context, request operations.DeleteRealmClientsIDScopeMappingsClientsClientRequest) (*operations.DeleteRealmClientsIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.DeleteRealmClientsIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// DeleteRealmClientsIDScopeMappingsRealm - Remove a set of realm-level roles from the client’s scope
func (s *ScopeMappings) DeleteRealmClientsIDScopeMappingsRealm(ctx context.Context, request operations.DeleteRealmClientsIDScopeMappingsRealmRequest) (*operations.DeleteRealmClientsIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.DeleteRealmClientsIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// GetRealmClientScopesIDScopeMappings - Get all scope mappings for the client
func (s *ScopeMappings) GetRealmClientScopesIDScopeMappings(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRequest) (*operations.GetRealmClientScopesIDScopeMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsResponse{
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

// GetRealmClientScopesIDScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
func (s *ScopeMappings) GetRealmClientScopesIDScopeMappingsClientsClient(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsClientsClientRequest) (*operations.GetRealmClientScopesIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsClientsClientResponse{
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

// GetRealmClientScopesIDScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
func (s *ScopeMappings) GetRealmClientScopesIDScopeMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableRequest) (*operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/available", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsClientsClientAvailableResponse{
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

// GetRealmClientScopesIDScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
func (s *ScopeMappings) GetRealmClientScopesIDScopeMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeRequest) (*operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}/composite", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsClientsClientCompositeResponse{
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

// GetRealmClientScopesIDScopeMappingsRealm - Get realm-level roles associated with the client’s scope
func (s *ScopeMappings) GetRealmClientScopesIDScopeMappingsRealm(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRealmRequest) (*operations.GetRealmClientScopesIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsRealmResponse{
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

// GetRealmClientScopesIDScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
func (s *ScopeMappings) GetRealmClientScopesIDScopeMappingsRealmAvailable(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRealmAvailableRequest) (*operations.GetRealmClientScopesIDScopeMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsRealmAvailableResponse{
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

// GetRealmClientScopesIDScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
func (s *ScopeMappings) GetRealmClientScopesIDScopeMappingsRealmComposite(ctx context.Context, request operations.GetRealmClientScopesIDScopeMappingsRealmCompositeRequest) (*operations.GetRealmClientScopesIDScopeMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmClientScopesIDScopeMappingsRealmCompositeResponse{
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

// GetRealmClientsIDScopeMappings - Get all scope mappings for the client
func (s *ScopeMappings) GetRealmClientsIDScopeMappings(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRequest) (*operations.GetRealmClientsIDScopeMappingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsResponse{
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

// GetRealmClientsIDScopeMappingsClientsClient - Get the roles associated with a client’s scope   Returns roles for the client.
func (s *ScopeMappings) GetRealmClientsIDScopeMappingsClientsClient(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsClientsClientRequest) (*operations.GetRealmClientsIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsClientsClientResponse{
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

// GetRealmClientsIDScopeMappingsClientsClientAvailable - The available client-level roles   Returns the roles for the client that can be associated with the client’s scope
func (s *ScopeMappings) GetRealmClientsIDScopeMappingsClientsClientAvailable(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsClientsClientAvailableRequest) (*operations.GetRealmClientsIDScopeMappingsClientsClientAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/available", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsClientsClientAvailableResponse{
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

// GetRealmClientsIDScopeMappingsClientsClientComposite - Get effective client roles   Returns the roles for the client that are associated with the client’s scope.
func (s *ScopeMappings) GetRealmClientsIDScopeMappingsClientsClientComposite(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsClientsClientCompositeRequest) (*operations.GetRealmClientsIDScopeMappingsClientsClientCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}/composite", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsClientsClientCompositeResponse{
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

// GetRealmClientsIDScopeMappingsRealm - Get realm-level roles associated with the client’s scope
func (s *ScopeMappings) GetRealmClientsIDScopeMappingsRealm(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRealmRequest) (*operations.GetRealmClientsIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsRealmResponse{
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

// GetRealmClientsIDScopeMappingsRealmAvailable - Get realm-level roles that are available to attach to this client’s scope
func (s *ScopeMappings) GetRealmClientsIDScopeMappingsRealmAvailable(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRealmAvailableRequest) (*operations.GetRealmClientsIDScopeMappingsRealmAvailableResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm/available", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsRealmAvailableResponse{
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

// GetRealmClientsIDScopeMappingsRealmComposite - Get effective realm-level roles associated with the client’s scope   What this does is recurse  any composite roles associated with the client’s scope and adds the roles to this lists.
func (s *ScopeMappings) GetRealmClientsIDScopeMappingsRealmComposite(ctx context.Context, request operations.GetRealmClientsIDScopeMappingsRealmCompositeRequest) (*operations.GetRealmClientsIDScopeMappingsRealmCompositeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm/composite", request.PathParams)

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

	res := &operations.GetRealmClientsIDScopeMappingsRealmCompositeResponse{
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

// PostRealmClientScopesIDScopeMappingsClientsClient - Add client-level roles to the client’s scope
func (s *ScopeMappings) PostRealmClientScopesIDScopeMappingsClientsClient(ctx context.Context, request operations.PostRealmClientScopesIDScopeMappingsClientsClientRequest) (*operations.PostRealmClientScopesIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.PostRealmClientScopesIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientScopesIDScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
func (s *ScopeMappings) PostRealmClientScopesIDScopeMappingsRealm(ctx context.Context, request operations.PostRealmClientScopesIDScopeMappingsRealmRequest) (*operations.PostRealmClientScopesIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/client-scopes/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmClientScopesIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDScopeMappingsClientsClient - Add client-level roles to the client’s scope
func (s *ScopeMappings) PostRealmClientsIDScopeMappingsClientsClient(ctx context.Context, request operations.PostRealmClientsIDScopeMappingsClientsClientRequest) (*operations.PostRealmClientsIDScopeMappingsClientsClientResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/clients/{client}", request.PathParams)

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

	res := &operations.PostRealmClientsIDScopeMappingsClientsClientResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}

// PostRealmClientsIDScopeMappingsRealm - Add a set of realm-level roles to the client’s scope
func (s *ScopeMappings) PostRealmClientsIDScopeMappingsRealm(ctx context.Context, request operations.PostRealmClientsIDScopeMappingsRealmRequest) (*operations.PostRealmClientsIDScopeMappingsRealmResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/{realm}/clients/{id}/scope-mappings/realm", request.PathParams)

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

	res := &operations.PostRealmClientsIDScopeMappingsRealmResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode >= 200 && httpRes.StatusCode < 300:
	}

	return res, nil
}
