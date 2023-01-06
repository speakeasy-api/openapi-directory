package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePaymentInfoRequest struct {
	Request *shared.UpdatePaymentInfo `request:"mediaType=application/json"`
}

type UpdatePaymentInfoResponse struct {
	ContentType string
	Error       *shared.Error
	PaymentInfo *shared.PaymentInfo
	StatusCode  int64
}
