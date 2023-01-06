package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypes401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypes403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypes404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesRequest struct {
	PathParams GetIntegrationsJiraCloudProjectsProjectIDIssueTypesPathParams
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesResponse struct {
	ContentType                                                                 string
	JiraIssueTypes                                                              []shared.JiraIssueType
	StatusCode                                                                  int64
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypes401ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypes401ApplicationJSON
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypes403ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypes403ApplicationJSON
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypes404ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypes404ApplicationJSON
}
