package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCreditCardPathParams struct {
	CardID int64 `pathParam:"style=simple,explode=false,name=cardId"`
}

type DeleteCreditCardRequest struct {
	PathParams DeleteCreditCardPathParams
}

type DeleteCreditCardResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
