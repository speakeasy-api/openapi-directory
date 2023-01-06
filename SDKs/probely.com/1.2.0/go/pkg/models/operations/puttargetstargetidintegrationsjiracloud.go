package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDIntegrationsJiraCloudPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsJiraCloudRequest struct {
	PathParams PutTargetsTargetIDIntegrationsJiraCloudPathParams
	Request    shared.JiraScope `request:"mediaType=application/json"`
}

type PutTargetsTargetIDIntegrationsJiraCloudResponse struct {
	ContentType                                                     string
	JiraScope                                                       *shared.JiraScope
	StatusCode                                                      int64
	PutTargetsTargetIDIntegrationsJiraCloud401ApplicationJSONObject *PutTargetsTargetIDIntegrationsJiraCloud401ApplicationJSON
	PutTargetsTargetIDIntegrationsJiraCloud403ApplicationJSONObject *PutTargetsTargetIDIntegrationsJiraCloud403ApplicationJSON
	PutTargetsTargetIDIntegrationsJiraCloud404ApplicationJSONObject *PutTargetsTargetIDIntegrationsJiraCloud404ApplicationJSON
}
