package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeFollowingsUserIDPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetMeFollowingsUserIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeFollowingsUserIDRequest struct {
	PathParams GetMeFollowingsUserIDPathParams
	Security   GetMeFollowingsUserIDSecurity
}

type GetMeFollowingsUserIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
