package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDFollowingsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDFollowingsQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetUsersUserIDFollowingsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDFollowingsRequest struct {
	PathParams  GetUsersUserIDFollowingsPathParams
	QueryParams GetUsersUserIDFollowingsQueryParams
	Security    GetUsersUserIDFollowingsSecurity
}

type GetUsersUserIDFollowingsResponse struct {
	ContentType                                     string
	Error                                           *shared.Error
	StatusCode                                      int64
	GetUsersUserIDFollowings200ApplicationJSONOneOf *interface{}
}
