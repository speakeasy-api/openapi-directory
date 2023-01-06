package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDFollowersPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDFollowersQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetUsersUserIDFollowersSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDFollowersRequest struct {
	PathParams  GetUsersUserIDFollowersPathParams
	QueryParams GetUsersUserIDFollowersQueryParams
	Security    GetUsersUserIDFollowersSecurity
}

type GetUsersUserIDFollowersResponse struct {
	ContentType                                    string
	Error                                          *shared.Error
	StatusCode                                     int64
	GetUsersUserIDFollowers200ApplicationJSONOneOf *interface{}
}
