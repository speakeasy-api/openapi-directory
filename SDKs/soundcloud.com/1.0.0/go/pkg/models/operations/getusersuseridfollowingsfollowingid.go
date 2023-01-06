package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDFollowingsFollowingIDPathParams struct {
	FollowingID int64 `pathParam:"style=simple,explode=false,name=following_id"`
	UserID      int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDFollowingsFollowingIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDFollowingsFollowingIDRequest struct {
	PathParams GetUsersUserIDFollowingsFollowingIDPathParams
	Security   GetUsersUserIDFollowingsFollowingIDSecurity
}

type GetUsersUserIDFollowingsFollowingIDResponse struct {
	CompleteUser *shared.CompleteUser
	ContentType  string
	Error        *shared.Error
	StatusCode   int64
}
