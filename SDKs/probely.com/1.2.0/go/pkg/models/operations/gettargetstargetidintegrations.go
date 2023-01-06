package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDIntegrationsPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDIntegrations401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrations403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDIntegrationsRequest struct {
	PathParams GetTargetsTargetIDIntegrationsPathParams
}

type GetTargetsTargetIDIntegrationsResponse struct {
	ContentType                                            string
	Integrations                                           *shared.Integrations
	StatusCode                                             int64
	GetTargetsTargetIDIntegrations401ApplicationJSONObject *GetTargetsTargetIDIntegrations401ApplicationJSON
	GetTargetsTargetIDIntegrations403ApplicationJSONObject *GetTargetsTargetIDIntegrations403ApplicationJSON
}
