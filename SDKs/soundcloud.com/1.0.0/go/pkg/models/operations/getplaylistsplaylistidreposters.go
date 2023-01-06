package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlaylistsPlaylistIDRepostersPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type GetPlaylistsPlaylistIDRepostersQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetPlaylistsPlaylistIDRepostersSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type GetPlaylistsPlaylistIDRepostersRequest struct {
	PathParams  GetPlaylistsPlaylistIDRepostersPathParams
	QueryParams GetPlaylistsPlaylistIDRepostersQueryParams
	Security    GetPlaylistsPlaylistIDRepostersSecurity
}

type GetPlaylistsPlaylistIDRepostersResponse struct {
	ContentType string
	Error       *shared.Error
	MetaUsers   *shared.MetaUsers
	StatusCode  int64
}
