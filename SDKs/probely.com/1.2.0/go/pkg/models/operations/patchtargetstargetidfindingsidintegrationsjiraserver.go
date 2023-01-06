package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDFindingsIDIntegrationsJiraServerPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraServerRequest struct {
	PathParams PatchTargetsTargetIDFindingsIDIntegrationsJiraServerPathParams
	Request    shared.JiraFinding `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraServerResponse struct {
	ContentType                                                                  string
	JiraFinding                                                                  *shared.JiraFinding
	StatusCode                                                                   int64
	PatchTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSONObject *PatchTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON
	PatchTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSONObject *PatchTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON
	PatchTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSONObject *PatchTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON
}
