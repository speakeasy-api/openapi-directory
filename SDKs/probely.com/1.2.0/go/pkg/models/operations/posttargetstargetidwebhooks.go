package operations

import (
	"openapi/pkg/models/shared"
)

type PostTargetsTargetIDWebhooksPathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type PostTargetsTargetIDWebhooks400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostTargetsTargetIDWebhooks401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDWebhooks403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDWebhooks404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostTargetsTargetIDWebhooksRequest struct {
	PathParams PostTargetsTargetIDWebhooksPathParams
	Request    shared.WebhookInput `request:"mediaType=application/json"`
}

type PostTargetsTargetIDWebhooksResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	Webhook                                             *shared.Webhook
	PostTargetsTargetIDWebhooks400ApplicationJSONObject *PostTargetsTargetIDWebhooks400ApplicationJSON
	PostTargetsTargetIDWebhooks401ApplicationJSONObject *PostTargetsTargetIDWebhooks401ApplicationJSON
	PostTargetsTargetIDWebhooks403ApplicationJSONObject *PostTargetsTargetIDWebhooks403ApplicationJSON
	PostTargetsTargetIDWebhooks404ApplicationJSONObject *PostTargetsTargetIDWebhooks404ApplicationJSON
}
