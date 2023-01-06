package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDIntegrationsSlackPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDIntegrationsSlack401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsSlack403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsSlack404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDIntegrationsSlackRequest struct {
	PathParams PatchTargetsTargetIDIntegrationsSlackPathParams
	Request    shared.Slack `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDIntegrationsSlackResponse struct {
	ContentType                                                   string
	Slack                                                         *shared.Slack
	StatusCode                                                    int64
	PatchTargetsTargetIDIntegrationsSlack401ApplicationJSONObject *PatchTargetsTargetIDIntegrationsSlack401ApplicationJSON
	PatchTargetsTargetIDIntegrationsSlack403ApplicationJSONObject *PatchTargetsTargetIDIntegrationsSlack403ApplicationJSON
	PatchTargetsTargetIDIntegrationsSlack404ApplicationJSONObject *PatchTargetsTargetIDIntegrationsSlack404ApplicationJSON
}
