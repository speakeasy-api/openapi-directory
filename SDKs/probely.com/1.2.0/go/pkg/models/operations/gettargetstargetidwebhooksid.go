package operations

import (
	"openapi/pkg/models/shared"
)

type GetTargetsTargetIDWebhooksIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDWebhooksIDRequest struct {
	PathParams GetTargetsTargetIDWebhooksIDPathParams
}

type GetTargetsTargetIDWebhooksIDResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	Webhook                                              *shared.Webhook
	GetTargetsTargetIDWebhooksID401ApplicationJSONObject *GetTargetsTargetIDWebhooksID401ApplicationJSON
	GetTargetsTargetIDWebhooksID403ApplicationJSONObject *GetTargetsTargetIDWebhooksID403ApplicationJSON
}
