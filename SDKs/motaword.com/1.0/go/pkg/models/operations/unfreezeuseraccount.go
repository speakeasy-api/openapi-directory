package operations

import (
	"openapi/pkg/models/shared"
)

type UnfreezeUserAccountPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type UnfreezeUserAccountRequest struct {
	PathParams UnfreezeUserAccountPathParams
}

type UnfreezeUserAccountResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
