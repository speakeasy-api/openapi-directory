package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDFindingsIDIntegrationsJiraServerPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraServerRequest struct {
	PathParams PutTargetsTargetIDFindingsIDIntegrationsJiraServerPathParams
	Request    shared.JiraFinding `request:"mediaType=application/json"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraServerResponse struct {
	ContentType                                                                string
	JiraFinding                                                                *shared.JiraFinding
	StatusCode                                                                 int64
	PutTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSONObject *PutTargetsTargetIDFindingsIDIntegrationsJiraServer401ApplicationJSON
	PutTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSONObject *PutTargetsTargetIDFindingsIDIntegrationsJiraServer403ApplicationJSON
	PutTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSONObject *PutTargetsTargetIDFindingsIDIntegrationsJiraServer404ApplicationJSON
}
