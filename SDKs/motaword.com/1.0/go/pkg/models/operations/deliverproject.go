package operations

import (
	"openapi/pkg/models/shared"
)

type DeliverProjectPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeliverProjectRequest struct {
	PathParams DeliverProjectPathParams
}

type DeliverProjectResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
