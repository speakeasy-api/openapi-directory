package operations

import (
	"openapi/pkg/models/shared"
)

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusPathParams struct {
	IssueTypeID string `pathParam:"style=simple,explode=false,name=issue_type_id"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusRequest struct {
	PathParams GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusPathParams
}

type GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatusResponse struct {
	ContentType                                                                                   string
	JiraIssueStatuses                                                                             []shared.JiraIssueStatus
	StatusCode                                                                                    int64
	GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus401ApplicationJSON
	GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus403ApplicationJSON
	GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSONObject *GetIntegrationsJiraServerProjectsProjectIDIssueTypesIssueTypeIDStatus404ApplicationJSON
}
