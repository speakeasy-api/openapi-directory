package operations

import (
	"openapi/pkg/models/shared"
)

type PutTargetsTargetIDWebhooksIDPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PutTargetsTargetIDWebhooksID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutTargetsTargetIDWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDWebhooksID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutTargetsTargetIDWebhooksIDRequest struct {
	PathParams PutTargetsTargetIDWebhooksIDPathParams
	Request    shared.WebhookInput `request:"mediaType=application/json"`
}

type PutTargetsTargetIDWebhooksIDResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	Webhook                                              *shared.Webhook
	PutTargetsTargetIDWebhooksID400ApplicationJSONObject *PutTargetsTargetIDWebhooksID400ApplicationJSON
	PutTargetsTargetIDWebhooksID401ApplicationJSONObject *PutTargetsTargetIDWebhooksID401ApplicationJSON
	PutTargetsTargetIDWebhooksID403ApplicationJSONObject *PutTargetsTargetIDWebhooksID403ApplicationJSON
	PutTargetsTargetIDWebhooksID404ApplicationJSONObject *PutTargetsTargetIDWebhooksID404ApplicationJSON
}
