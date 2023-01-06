package operations

import (
	"openapi/pkg/models/shared"
)

type PostBillingEstimate400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostBillingEstimate401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostBillingEstimate403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostBillingEstimateRequest struct {
	Request shared.SubscriptionInput `request:"mediaType=application/json"`
}

type PostBillingEstimateResponse struct {
	ContentType                                 string
	Invoice                                     *shared.Invoice
	StatusCode                                  int64
	PostBillingEstimate400ApplicationJSONObject *PostBillingEstimate400ApplicationJSON
	PostBillingEstimate401ApplicationJSONObject *PostBillingEstimate401ApplicationJSON
	PostBillingEstimate403ApplicationJSONObject *PostBillingEstimate403ApplicationJSON
}
