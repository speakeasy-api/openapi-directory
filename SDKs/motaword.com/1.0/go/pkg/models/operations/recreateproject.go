package operations

import (
	"openapi/pkg/models/shared"
)

type RecreateProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type RecreateProjectRequest struct {
	PathParams RecreateProjectPathParams
}

type RecreateProjectResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
