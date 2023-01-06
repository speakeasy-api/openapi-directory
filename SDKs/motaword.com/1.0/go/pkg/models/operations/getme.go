package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
