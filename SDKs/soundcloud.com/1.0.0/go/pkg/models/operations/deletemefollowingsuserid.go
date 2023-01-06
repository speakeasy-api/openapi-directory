package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMeFollowingsUserIDPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type DeleteMeFollowingsUserIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteMeFollowingsUserIDRequest struct {
	PathParams DeleteMeFollowingsUserIDPathParams
	Security   DeleteMeFollowingsUserIDSecurity
}

type DeleteMeFollowingsUserIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
