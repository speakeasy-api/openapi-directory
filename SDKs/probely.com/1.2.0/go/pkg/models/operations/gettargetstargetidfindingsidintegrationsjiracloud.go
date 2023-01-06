package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest struct {
	PathParams GetTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse struct {
	ContentType                                                               string
	JiraFinding                                                               *shared.JiraFinding
	StatusCode                                                                int64
	GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSONObject *GetTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON
	GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSONObject *GetTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON
}
