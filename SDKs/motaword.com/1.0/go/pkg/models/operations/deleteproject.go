package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteProjectRequest struct {
	PathParams DeleteProjectPathParams
}

type DeleteProjectResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
