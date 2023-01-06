package operations

import (
	"openapi/pkg/models/shared"
)

type GetMePlaylistsQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetMePlaylistsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMePlaylistsRequest struct {
	QueryParams GetMePlaylistsQueryParams
	Security    GetMePlaylistsSecurity
}

type GetMePlaylistsResponse struct {
	ContentType    string
	Error          *shared.Error
	PlaylistsArray []shared.Playlist
	StatusCode     int64
}
