package operations

import (
	"openapi/pkg/models/shared"
)

type PatchWebhooksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PatchWebhooksID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PatchWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchWebhooksID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchWebhooksIDRequest struct {
	PathParams PatchWebhooksIDPathParams
	Request    shared.WebhookInput `request:"mediaType=application/json"`
}

type PatchWebhooksIDResponse struct {
	ContentType                             string
	StatusCode                              int64
	Webhook                                 *shared.Webhook
	PatchWebhooksID400ApplicationJSONObject *PatchWebhooksID400ApplicationJSON
	PatchWebhooksID401ApplicationJSONObject *PatchWebhooksID401ApplicationJSON
	PatchWebhooksID403ApplicationJSONObject *PatchWebhooksID403ApplicationJSON
	PatchWebhooksID404ApplicationJSONObject *PatchWebhooksID404ApplicationJSON
}
