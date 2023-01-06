package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPaymentInfoPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserPaymentInfoRequest struct {
	PathParams GetUserPaymentInfoPathParams
}

type GetUserPaymentInfoResponse struct {
	ContentType string
	Error       *shared.Error
	PaymentInfo *shared.PaymentInfo
	StatusCode  int64
}
