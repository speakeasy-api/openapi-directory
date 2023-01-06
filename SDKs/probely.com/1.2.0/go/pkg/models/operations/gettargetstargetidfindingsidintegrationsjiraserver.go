package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDFindingsIDIntegrationsJiraServerPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraServerRequest struct {
	PathParams GetTargetsTargetIDFindingsIDIntegrationsJiraServerPathParams
}

type GetTargetsTargetIDFindingsIDIntegrationsJiraServerResponse struct {
	ContentType                                                                string
	JiraFinding                                                                *shared.JiraFinding
	StatusCode                                                                 int64
	GetTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSONObject *GetTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON
	GetTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSONObject *GetTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON
}
