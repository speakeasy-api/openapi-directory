package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditCardPathParams struct {
	CardID int64 `pathParam:"style=simple,explode=false,name=cardId"`
}

type GetCreditCardRequest struct {
	PathParams GetCreditCardPathParams
}

type GetCreditCardResponse struct {
	ContentType string
	CreditCard  *shared.CreditCard
	Error       *shared.Error
	StatusCode  int64
}
