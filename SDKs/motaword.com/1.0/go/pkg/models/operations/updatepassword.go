package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePasswordRequest struct {
	Request *shared.PasswordUpdateContent `request:"mediaType=application/json"`
}

type UpdatePasswordResponse struct {
	ContentType     string
	Error           *shared.Error
	OperationStatus *shared.OperationStatus
	StatusCode      int64
}
