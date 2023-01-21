package operations

import (
	"openapi/pkg/models/shared"
)

type UserGetResponse struct {
	ContentType string
	StatusCode  int64
	UserDTO     *shared.UserDto
}
