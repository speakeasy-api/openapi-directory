package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDIntegrationsSlackPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDIntegrationsSlack401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsSlack403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsSlack404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDIntegrationsSlackRequest struct {
	PathParams PutTargetsTargetIDIntegrationsSlackPathParams
	Request    shared.Slack `request:"mediaType=application/json"`
}

type PutTargetsTargetIDIntegrationsSlackResponse struct {
	ContentType                                                 string
	Slack                                                       *shared.Slack
	StatusCode                                                  int64
	PutTargetsTargetIDIntegrationsSlack401ApplicationJSONObject *PutTargetsTargetIDIntegrationsSlack401ApplicationJSON
	PutTargetsTargetIDIntegrationsSlack403ApplicationJSONObject *PutTargetsTargetIDIntegrationsSlack403ApplicationJSON
	PutTargetsTargetIDIntegrationsSlack404ApplicationJSONObject *PutTargetsTargetIDIntegrationsSlack404ApplicationJSON
}
