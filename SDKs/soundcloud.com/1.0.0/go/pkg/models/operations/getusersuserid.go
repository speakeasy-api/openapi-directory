package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDRequest struct {
	PathParams GetUsersUserIDPathParams
	Security   GetUsersUserIDSecurity
}

type GetUsersUserIDResponse struct {
	CompleteUser *shared.CompleteUser
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
