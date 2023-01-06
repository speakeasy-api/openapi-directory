package operations

import (
	"openapi/pkg/models/shared"
)

type GetBillingResponse struct {
	Billing     *shared.Billing
	ContentType string
	StatusCode  int64
}
