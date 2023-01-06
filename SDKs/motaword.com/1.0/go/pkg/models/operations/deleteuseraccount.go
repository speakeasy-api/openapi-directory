package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserAccountPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteUserAccountRequest struct {
	PathParams DeleteUserAccountPathParams
}

type DeleteUserAccountResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
