package operations

import (
	"openapi/pkg/models/shared"
)

type PostBillingSubscribe400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostBillingSubscribe401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostBillingSubscribe403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostBillingSubscribeRequest struct {
	Request shared.SubscriptionInput `request:"mediaType=application/json"`
}

type PostBillingSubscribeResponse struct {
	ContentType                                  string
	Invoice                                      *shared.Invoice
	StatusCode                                   int64
	PostBillingSubscribe400ApplicationJSONObject *PostBillingSubscribe400ApplicationJSON
	PostBillingSubscribe401ApplicationJSONObject *PostBillingSubscribe401ApplicationJSON
	PostBillingSubscribe403ApplicationJSONObject *PostBillingSubscribe403ApplicationJSON
}
