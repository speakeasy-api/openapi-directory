package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDTracksPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDTracksQueryParams struct {
	Access             []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit              *int64              `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool               `queryParam:"style=form,explode=true,name=linked_partitioning"`
}

type GetUsersUserIDTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDTracksRequest struct {
	PathParams  GetUsersUserIDTracksPathParams
	QueryParams GetUsersUserIDTracksQueryParams
	Security    GetUsersUserIDTracksSecurity
}

type GetUsersUserIDTracksResponse struct {
	ContentType                                 string
	Error                                       *shared.Error
	StatusCode                                  int64
	GetUsersUserIDTracks200ApplicationJSONOneOf *interface{}
}
