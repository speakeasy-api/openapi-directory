package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraCloudRequest struct {
	PathParams PutTargetsTargetIDFindingsIDIntegrationsJiraCloudPathParams
	Request    shared.JiraFinding `request:"mediaType=application/json"`
}

type PutTargetsTargetIDFindingsIDIntegrationsJiraCloudResponse struct {
	ContentType                                                               string
	JiraFinding                                                               *shared.JiraFinding
	StatusCode                                                                int64
	PutTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSONObject *PutTargetsTargetIDFindingsIDIntegrationsJiraCloud401ApplicationJSON
	PutTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSONObject *PutTargetsTargetIDFindingsIDIntegrationsJiraCloud403ApplicationJSON
	PutTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSONObject *PutTargetsTargetIDFindingsIDIntegrationsJiraCloud404ApplicationJSON
}
