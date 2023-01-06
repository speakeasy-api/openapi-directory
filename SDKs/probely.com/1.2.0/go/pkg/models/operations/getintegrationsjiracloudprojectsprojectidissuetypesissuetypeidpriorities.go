package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesPathParams struct {
	IssueTypeID string `pathParam:"style=simple,explode=false,name=issue_type_id"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesRequest struct {
	PathParams GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesPathParams
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPrioritiesResponse struct {
	ContentType                                                                                      string
	JiraIssuePriorities                                                                              []shared.JiraIssuePriority
	StatusCode                                                                                       int64
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities401ApplicationJSON
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDPriorities403ApplicationJSON
}
