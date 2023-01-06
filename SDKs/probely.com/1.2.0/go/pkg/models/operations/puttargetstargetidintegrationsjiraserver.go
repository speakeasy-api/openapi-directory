package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDIntegrationsJiraServerPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDIntegrationsJiraServer401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsJiraServer403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsJiraServer404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsJiraServerRequest struct {
	PathParams PutTargetsTargetIDIntegrationsJiraServerPathParams
	Request    shared.JiraScope `request:"mediaType=application/json"`
}

type PutTargetsTargetIDIntegrationsJiraServerResponse struct {
	ContentType                                                      string
	JiraScope                                                        *shared.JiraScope
	StatusCode                                                       int64
	PutTargetsTargetIDIntegrationsJiraServer401ApplicationJSONObject *PutTargetsTargetIDIntegrationsJiraServer401ApplicationJSON
	PutTargetsTargetIDIntegrationsJiraServer403ApplicationJSONObject *PutTargetsTargetIDIntegrationsJiraServer403ApplicationJSON
	PutTargetsTargetIDIntegrationsJiraServer404ApplicationJSONObject *PutTargetsTargetIDIntegrationsJiraServer404ApplicationJSON
}
