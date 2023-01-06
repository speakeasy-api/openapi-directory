package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentInfoResponse struct {
	ContentType string
	Error       *shared.Error
	PaymentInfo *shared.PaymentInfo
	StatusCode  int64
}
