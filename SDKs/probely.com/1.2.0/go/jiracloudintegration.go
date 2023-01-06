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

type JiraCloudIntegration struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewJiraCloudIntegration(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *JiraCloudIntegration {
	return &JiraCloudIntegration{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetIntegrationsJiraCloudProjects - List Jira Projects
func (s *JiraCloudIntegration) GetIntegrationsJiraCloudProjects(ctx context.Context) (*operations.GetIntegrationsJiraCloudProjectsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/integrations/jira-cloud/projects/"

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

	res := &operations.GetIntegrationsJiraCloudProjectsResponse{
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
			var out *operations.GetIntegrationsJiraCloudProjects401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjects401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraCloudProjects403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjects403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetIntegrationsJiraCloudProjectsProjectIDIssueTypes - Retrieve project issue types
func (s *JiraCloudIntegration) GetIntegrationsJiraCloudProjectsProjectIDIssueTypes(ctx context.Context, request operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesRequest) (*operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/integrations/jira-cloud/projects/{project_id}/issue_types/", request.PathParams)

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

	res := &operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesResponse{
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
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypes404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities - Retrieve issue priorities
func (s *JiraCloudIntegration) GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities(ctx context.Context, request operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesRequest) (*operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/priorities/", request.PathParams)

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

	res := &operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse{
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
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus - Retrieve issue statuses
func (s *JiraCloudIntegration) GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus(ctx context.Context, request operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusRequest) (*operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/status/", request.PathParams)

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

	res := &operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusResponse{
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
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDFindingsIDIntegrationsJiraCloud - Retrieve Jira Cloud finding configuration
func (s *JiraCloudIntegration) GetTargetsTargetIDFindingsIDIntegrationsJiraCloud(ctx context.Context, request operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest) (*operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.PathParams)

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

	res := &operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse{
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
			var out *operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// GetTargetsTargetIDIntegrationsJiraCloud - Retrieve Jira Cloud Target configuration
func (s *JiraCloudIntegration) GetTargetsTargetIDIntegrationsJiraCloud(ctx context.Context, request operations.GetTargetsTargetIDIntegrationsJiraCloudRequest) (*operations.GetTargetsTargetIDIntegrationsJiraCloudResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/integrations/jira-cloud/", request.PathParams)

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

	res := &operations.GetTargetsTargetIDIntegrationsJiraCloudResponse{
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
			var out *operations.GetTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDIntegrationsJiraCloud401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTargetsTargetIDIntegrationsJiraCloud403ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud - Update Jira Cloud finding configuration
func (s *JiraCloudIntegration) PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud(ctx context.Context, request operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest) (*operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.PathParams)

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

	res := &operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse{
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
			var out *operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PatchTargetsTargetIDIntegrationsJiraCloud - Update Jira Cloud target configuration
func (s *JiraCloudIntegration) PatchTargetsTargetIDIntegrationsJiraCloud(ctx context.Context, request operations.PatchTargetsTargetIDIntegrationsJiraCloudRequest) (*operations.PatchTargetsTargetIDIntegrationsJiraCloudResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/integrations/jira-cloud/", request.PathParams)

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

	res := &operations.PatchTargetsTargetIDIntegrationsJiraCloudResponse{
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
			var out *operations.PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDIntegrationsJiraCloud401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDIntegrationsJiraCloud403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PatchTargetsTargetIDIntegrationsJiraCloud404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PutTargetsTargetIDFindingsIDIntegrationsJiraCloud - Update Jira Cloud finding configuration
func (s *JiraCloudIntegration) PutTargetsTargetIDFindingsIDIntegrationsJiraCloud(ctx context.Context, request operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest) (*operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/findings/{id}/integrations/jira-cloud/", request.PathParams)

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

	res := &operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse{
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
			var out *operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSONObject = out
		}
	}

	return res, nil
}

// PutTargetsTargetIDIntegrationsJiraCloud - Update Jira Cloud target configuration
func (s *JiraCloudIntegration) PutTargetsTargetIDIntegrationsJiraCloud(ctx context.Context, request operations.PutTargetsTargetIDIntegrationsJiraCloudRequest) (*operations.PutTargetsTargetIDIntegrationsJiraCloudResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/targets/{target_id}/integrations/jira-cloud/", request.PathParams)

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

	res := &operations.PutTargetsTargetIDIntegrationsJiraCloudResponse{
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
			var out *operations.PutTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDIntegrationsJiraCloud401ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDIntegrationsJiraCloud403ApplicationJSONObject = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.PutTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PutTargetsTargetIDIntegrationsJiraCloud404ApplicationJSONObject = out
		}
	}

	return res, nil
}
