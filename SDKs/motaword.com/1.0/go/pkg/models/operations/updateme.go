package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMeRequest struct {
	Request *shared.UserUpdateContent `request:"mediaType=application/json"`
}

type UpdateMeResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
