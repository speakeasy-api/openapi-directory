package operations

import (
	"openapi/pkg/models/shared"
)

type GetCorporateUsersResponse struct {
	ContentType string
	StatusCode  int64
	UserList    *shared.UserList
}
