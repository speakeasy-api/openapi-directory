package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDLikesTracksPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDLikesTracksQueryParams struct {
	Access             []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit              *int64              `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool               `queryParam:"style=form,explode=true,name=linked_partitioning"`
}

type GetUsersUserIDLikesTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDLikesTracksRequest struct {
	PathParams  GetUsersUserIDLikesTracksPathParams
	QueryParams GetUsersUserIDLikesTracksQueryParams
	Security    GetUsersUserIDLikesTracksSecurity
}

type GetUsersUserIDLikesTracksResponse struct {
	ContentType                                      string
	Error                                            *shared.Error
	StatusCode                                       int64
	GetUsersUserIDLikesTracks200ApplicationJSONOneOf *interface{}
}
