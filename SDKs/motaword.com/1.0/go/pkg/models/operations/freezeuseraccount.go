package operations

import (
	"openapi/pkg/models/shared"
)

type FreezeUserAccountPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type FreezeUserAccountRequest struct {
	PathParams FreezeUserAccountPathParams
}

type FreezeUserAccountResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
