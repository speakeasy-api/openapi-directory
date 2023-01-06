package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDIntegrationsSlackPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDIntegrationsSlack401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrationsSlack403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrationsSlackRequest struct {
	PathParams GetTargetsTargetIDIntegrationsSlackPathParams
}

type GetTargetsTargetIDIntegrationsSlackResponse struct {
	ContentType                                                 string
	Slack                                                       *shared.Slack
	StatusCode                                                  int64
	GetTargetsTargetIDIntegrationsSlack401ApplicationJSONObject *GetTargetsTargetIDIntegrationsSlack401ApplicationJSON
	GetTargetsTargetIDIntegrationsSlack403ApplicationJSONObject *GetTargetsTargetIDIntegrationsSlack403ApplicationJSON
}
