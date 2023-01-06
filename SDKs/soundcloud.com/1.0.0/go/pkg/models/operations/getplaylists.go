package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlaylistsQueryParams struct {
	Access             []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit              *int64              `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool               `queryParam:"style=form,explode=true,name=linked_partitioning"`
	Offset             *int64              `queryParam:"style=form,explode=true,name=offset"`
	Q                  string              `queryParam:"style=form,explode=true,name=q"`
}

type GetPlaylistsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetPlaylistsRequest struct {
	QueryParams GetPlaylistsQueryParams
	Security    GetPlaylistsSecurity
}

type GetPlaylistsResponse struct {
	ContentType                         string
	Error                               *shared.Error
	StatusCode                          int64
	GetPlaylists200ApplicationJSONOneOf *interface{}
}
