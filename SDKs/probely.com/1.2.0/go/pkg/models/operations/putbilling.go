package operations

import (
	"openapi/pkg/models/shared"
)

type PutBilling401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutBilling403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PutBillingRequest struct {
	Request shared.Billing `request:"mediaType=application/json"`
}

type PutBillingResponse struct {
	Billing                            *shared.Billing
	ContentType                        string
	StatusCode                         int64
	PutBilling401ApplicationJSONObject *PutBilling401ApplicationJSON
	PutBilling403ApplicationJSONObject *PutBilling403ApplicationJSON
}
