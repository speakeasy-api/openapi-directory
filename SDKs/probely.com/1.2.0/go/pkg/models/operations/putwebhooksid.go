package operations

import (
	"openapi/pkg/models/shared"
)

type PutWebhooksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutWebhooksID400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PutWebhooksID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutWebhooksID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutWebhooksID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutWebhooksIDRequest struct {
	PathParams PutWebhooksIDPathParams
	Request    shared.WebhookInput `request:"mediaType=application/json"`
}

type PutWebhooksIDResponse struct {
	ContentType                           string
	StatusCode                            int64
	Webhook                               *shared.Webhook
	PutWebhooksID400ApplicationJSONObject *PutWebhooksID400ApplicationJSON
	PutWebhooksID401ApplicationJSONObject *PutWebhooksID401ApplicationJSON
	PutWebhooksID403ApplicationJSONObject *PutWebhooksID403ApplicationJSON
	PutWebhooksID404ApplicationJSONObject *PutWebhooksID404ApplicationJSON
}
