package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type GetPlaylistsPlaylistIDQueryParams struct {
	Access      []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	SecretToken *string             `queryParam:"style=form,explode=true,name=secret_token"`
}

type GetPlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetPlaylistsPlaylistIDRequest struct {
	PathParams  GetPlaylistsPlaylistIDPathParams
	QueryParams GetPlaylistsPlaylistIDQueryParams
	Security    GetPlaylistsPlaylistIDSecurity
}

type GetPlaylistsPlaylistIDResponse struct {
	ContentType string
	Error       *shared.Error
	Playlist    *shared.Playlist
	StatusCode  int64
}
