package operations

import (
	"openapi/pkg/models/shared"
)

type PutMeFollowingsUserIDPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type PutMeFollowingsUserIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type PutMeFollowingsUserIDRequest struct {
	PathParams PutMeFollowingsUserIDPathParams
	Security   PutMeFollowingsUserIDSecurity
}

type PutMeFollowingsUserIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
