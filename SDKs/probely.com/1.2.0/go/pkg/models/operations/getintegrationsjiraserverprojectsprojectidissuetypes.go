package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesRequest struct {
	PathParams GetIntegrationsJiraServerProjectsProjectIDIssueTypesPathParams
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesResponse struct {
	ContentType                                                                  string
	JiraIssueTypes                                                               []shared.JiraIssueType
	StatusCode                                                                   int64
	GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypes401ApplicationJSON
	GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypes403ApplicationJSON
	GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypes404ApplicationJSON
}
