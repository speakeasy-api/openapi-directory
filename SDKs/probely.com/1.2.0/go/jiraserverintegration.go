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

type JiraServerIntegration struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewJiraServerIntegration(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *JiraServerIntegration {
	return &JiraServerIntegration{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetIntegrationsJiraServerProjects - List Jira Projects
func (s *JiraServerIntegration) GetIntegrationsJiraServerProjects(ctx context.Context) (*operations.GetIntegrationsJiraServerProjectsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/integrations/jira-server/projects/"

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

	res := &operations.GetIntegrationsJiraServerProjectsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.JiraProject
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraProjects = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjects401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjects401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjects403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjects403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetIntegrationsJiraServerProjectsProjectIDIssueTypes - Retrieve project issue types
func (s *JiraServerIntegration) GetIntegrationsJiraServerProjectsProjectIDIssueTypes(ctx context.Context, request operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesRequest) (*operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/integrations/jira-server/projects/{project_id}/issue_types/", request.PathParams)

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

	res := &operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.JiraIssueType
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraIssueTypes = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities - Retrieve issue priorities
func (s *JiraServerIntegration) GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities(ctx context.Context, request operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesRequest) (*operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/priorities/", request.PathParams)

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

	res := &operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.JiraIssuePriority
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraIssuePriorities = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus - Retrieve issue statuses
func (s *JiraServerIntegration) GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus(ctx context.Context, request operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusRequest) (*operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/status/", request.PathParams)

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

	res := &operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.JiraIssueStatus
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraIssueStatuses = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDFindingsIDIntegrationsJiraServer - Retrieve Jira Server finding configuration
func (s *JiraServerIntegration) GetTargetsTargetIDFindingsIDIntegrationsJiraServer(ctx context.Context, request operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServerRequest) (*operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.PathParams)

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

	res := &operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JiraFinding
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraFinding = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDIntegrationsJiraServer - Retrieve Jira Server Target configuration
func (s *JiraServerIntegration) GetTargetsTargetIDIntegrationsJiraServer(ctx context.Context, request operations.GetTargetsTargetIDIntegrationsJiraServerRequest) (*operations.GetTargetsTargetIDIntegrationsJiraServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/integrations/jira-server/", request.PathParams)

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

	res := &operations.GetTargetsTargetIDIntegrationsJiraServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JiraScope
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraScope = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDIntegrationsJiraServer401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDIntegrationsJiraServer401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDIntegrationsJiraServer403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDIntegrationsJiraServer403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PatchTargetsTargetIDFindingsIDIntegrationsJiraServer - Update Jira Server finding configuration
func (s *JiraServerIntegration) PatchTargetsTargetIDFindingsIDIntegrationsJiraServer(ctx context.Context, request operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServerRequest) (*operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JiraFinding
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraFinding = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PatchTargetsTargetIDIntegrationsJiraServer - Update Jira Server target configuration
func (s *JiraServerIntegration) PatchTargetsTargetIDIntegrationsJiraServer(ctx context.Context, request operations.PatchTargetsTargetIDIntegrationsJiraServerRequest) (*operations.PatchTargetsTargetIDIntegrationsJiraServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/integrations/jira-server/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PATCH", url, bodyReader)
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

	res := &operations.PatchTargetsTargetIDIntegrationsJiraServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JiraScope
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraScope = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDIntegrationsJiraServer401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDIntegrationsJiraServer403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDIntegrationsJiraServer404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PutTargetsTargetIDFindingsIDIntegrationsJiraServer - Update Jira Server finding configuration
func (s *JiraServerIntegration) PutTargetsTargetIDFindingsIDIntegrationsJiraServer(ctx context.Context, request operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServerRequest) (*operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-server/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JiraFinding
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraFinding = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PutTargetsTargetIDIntegrationsJiraServer - Update Jira Server target configuration
func (s *JiraServerIntegration) PutTargetsTargetIDIntegrationsJiraServer(ctx context.Context, request operations.PutTargetsTargetIDIntegrationsJiraServerRequest) (*operations.PutTargetsTargetIDIntegrationsJiraServerResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/integrations/jira-server/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutTargetsTargetIDIntegrationsJiraServerResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.JiraScope
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.JiraScope = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDIntegrationsJiraServer401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDIntegrationsJiraServer401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDIntegrationsJiraServer403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDIntegrationsJiraServer403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDIntegrationsJiraServer404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDIntegrationsJiraServer404ApplicationJSONObject = out
		}
	}

	return res, nil
}
