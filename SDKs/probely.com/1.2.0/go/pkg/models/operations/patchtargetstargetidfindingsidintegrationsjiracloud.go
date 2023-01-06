package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest struct {
	PathParams PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams
	Request    shared.JiraFinding `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse struct {
	ContentType                                                                 string
	JiraFinding                                                                 *shared.JiraFinding
	StatusCode                                                                  int64
	PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSONObject *PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON
	PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSONObject *PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON
	PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSONObject *PatchTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON
}
