package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPaymentInfoPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserPaymentInfoRequest struct {
	PathParams UpdateUserPaymentInfoPathParams
	Request    *shared.PaymentInfo `request:"mediaType=application/json"`
}

type UpdateUserPaymentInfoResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
