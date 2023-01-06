package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUserSecurity struct {
	MwoAuth shared.SchemeMwoAuth `security:"scheme,type=oauth2"`
}

type GetUserRequest struct {
	PathParams GetUserPathParams
	Security   GetUserSecurity
}

type GetUserResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
