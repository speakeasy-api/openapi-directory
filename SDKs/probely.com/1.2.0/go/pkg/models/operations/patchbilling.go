package operations

import (
	"openapi/pkg/models/shared"
)

type PatchBilling401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchBilling403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PatchBillingRequest struct {
	Request shared.Billing `request:"mediaType=application/json"`
}

type PatchBillingResponse struct {
	Billing                              *shared.Billing
	ContentType                          string
	StatusCode                           int64
	PatchBilling401ApplicationJSONObject *PatchBilling401ApplicationJSON
	PatchBilling403ApplicationJSONObject *PatchBilling403ApplicationJSON
}
