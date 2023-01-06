package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type UpdateUserRequest struct {
	PathParams UpdateUserPathParams
	Request    *shared.UserUpdateContent `request:"mediaType=application/json"`
}

type UpdateUserResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
