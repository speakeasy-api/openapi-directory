package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusPathParams struct {
	IssueTypeID string `pathParam:"style=simple,explode=false,name=issue_type_id"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusRequest struct {
	PathParams GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusPathParams
}

type GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatusResponse struct {
	ContentType                                                                                  string
	JiraIssueStatuses                                                                            []shared.JiraIssueStatus
	StatusCode                                                                                   int64
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON
	GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSONObject *GetIntegrationsJiraCloudProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON
}
