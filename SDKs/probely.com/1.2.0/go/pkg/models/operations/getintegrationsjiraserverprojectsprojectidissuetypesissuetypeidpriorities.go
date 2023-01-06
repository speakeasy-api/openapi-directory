package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesPathParams struct {
	IssueTypeID string `pathParam:"style=simple,explode=false,name=issue_type_id"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesRequest struct {
	PathParams GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesPathParams
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse struct {
	ContentType                                                                                       string
	JiraIssuePriorities                                                                               []shared.JiraIssuePriority
	StatusCode                                                                                        int64
	GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON
	GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON
}
