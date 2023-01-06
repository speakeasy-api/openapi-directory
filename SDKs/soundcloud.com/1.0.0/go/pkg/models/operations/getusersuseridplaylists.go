package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDPlaylistsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetUsersUserIDPlaylistsQueryParams struct {
	Access             []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit              *int64              `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool               `queryParam:"style=form,explode=true,name=linked_partitioning"`
}

type GetUsersUserIDPlaylistsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersUserIDPlaylistsRequest struct {
	PathParams  GetUsersUserIDPlaylistsPathParams
	QueryParams GetUsersUserIDPlaylistsQueryParams
	Security    GetUsersUserIDPlaylistsSecurity
}

type GetUsersUserIDPlaylistsResponse struct {
	ContentType                                    string
	Error                                          *shared.Error
	StatusCode                                     int64
	GetUsersUserIDPlaylists200ApplicationJSONOneOf *interface{}
}
