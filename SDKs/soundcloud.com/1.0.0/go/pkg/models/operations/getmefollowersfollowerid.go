package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeFollowersFollowerIDPathParams struct {
	FollowerID int64 `pathParam:"style=simple,explode=false,name=follower_id"`
}

type GetMeFollowersFollowerIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeFollowersFollowerIDRequest struct {
	PathParams GetMeFollowersFollowerIDPathParams
	Security   GetMeFollowersFollowerIDSecurity
}

type GetMeFollowersFollowerIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
