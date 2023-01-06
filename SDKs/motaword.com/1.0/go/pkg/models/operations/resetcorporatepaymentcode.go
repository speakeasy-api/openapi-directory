package operations

import (
	"openapi/pkg/models/shared"
)

type ResetCorporatePaymentCodeResponse struct {
	ContentType string
	CreditCard  *shared.CreditCard
	Error       *shared.Error
	StatusCode  int64
}
