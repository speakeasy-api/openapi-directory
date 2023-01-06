package operations

import (
	"openapi/pkg/models/shared"
)

type PatchTargetsTargetIDWebhooksIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PatchTargetsTargetIDWebhooksID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchTargetsTargetIDWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDWebhooksID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchTargetsTargetIDWebhooksIDRequest struct {
	PathParams PatchTargetsTargetIDWebhooksIDPathParams
	Request    shared.WebhookInput `request:"mediaType=application/json"`
}

type PatchTargetsTargetIDWebhooksIDResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	Webhook                                                *shared.Webhook
	PatchTargetsTargetIDWebhooksID400ApplicationJSONObject *PatchTargetsTargetIDWebhooksID400ApplicationJSON
	PatchTargetsTargetIDWebhooksID401ApplicationJSONObject *PatchTargetsTargetIDWebhooksID401ApplicationJSON
	PatchTargetsTargetIDWebhooksID403ApplicationJSONObject *PatchTargetsTargetIDWebhooksID403ApplicationJSON
	PatchTargetsTargetIDWebhooksID404ApplicationJSONObject *PatchTargetsTargetIDWebhooksID404ApplicationJSON
}
