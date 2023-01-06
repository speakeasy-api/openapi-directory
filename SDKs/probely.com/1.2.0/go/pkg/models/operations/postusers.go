package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersRequestBodyInput struct {
	Email string                `json:"email"`
	Name  string                `json:"name"`
	Title *shared.UserTitleEnum `json:"title,omitempty"`
}

type PostUsersRequest struct {
	Request PostUsersRequestBodyInput `request:"mediaType=application/json"`
}

type PostUsersResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
