package operations

import (
	"openapi/pkg/models/shared"
)

type LogLocationRequest struct {
	Request *shared.LocationUpdateContent `request:"mediaType=application/json"`
}

type LogLocationResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
