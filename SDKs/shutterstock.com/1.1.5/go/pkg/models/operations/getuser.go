package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetUserRequest struct {
	Security GetUserSecurity
}

type GetUserResponse struct {
	ContentType string
	StatusCode  int64
	UserDetails *shared.UserDetails
}
