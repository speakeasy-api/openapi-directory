package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooks400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostWebhooks401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostWebhooks403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostWebhooks404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostWebhooksRequest struct {
	Request shared.WebhookInput `request:"mediaType=application/json"`
}

type PostWebhooksResponse struct {
	ContentType                          string
	StatusCode                           int64
	Webhook                              *shared.Webhook
	PostWebhooks400ApplicationJSONObject *PostWebhooks400ApplicationJSON
	PostWebhooks401ApplicationJSONObject *PostWebhooks401ApplicationJSON
	PostWebhooks403ApplicationJSONObject *PostWebhooks403ApplicationJSON
	PostWebhooks404ApplicationJSONObject *PostWebhooks404ApplicationJSON
}
