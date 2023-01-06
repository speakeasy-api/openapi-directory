package operations

import (
	"openapi/pkg/models/shared"
)

type SaveCorporateUserRequest struct {
	Request shared.UserUpdateContent `request:"mediaType=application/json"`
}

type SaveCorporateUserResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
