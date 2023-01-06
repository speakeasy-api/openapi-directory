package operations

import (
	"openapi/pkg/models/shared"
)

type ResetCardPaymentCodePathParams struct {
	CardID int64 `pathParam:"style=simple,explode=false,name=cardId"`
}

type ResetCardPaymentCodeRequest struct {
	PathParams ResetCardPaymentCodePathParams
}

type ResetCardPaymentCodeResponse struct {
	ContentType string
	CreditCard  *shared.CreditCard
	Error       *shared.Error
	StatusCode  int64
}
