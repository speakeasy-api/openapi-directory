package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContinuousProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteContinuousProjectRequest struct {
	PathParams DeleteContinuousProjectPathParams
}

type DeleteContinuousProjectResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
