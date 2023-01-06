package operations

import (
	"openapi/pkg/models/shared"
)

type GetMePlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type GetMePlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMePlaylistsPlaylistIDRequest struct {
	PathParams GetMePlaylistsPlaylistIDPathParams
	Security   GetMePlaylistsPlaylistIDSecurity
}

type GetMePlaylistsPlaylistIDResponse struct {
	ContentType string
	Playlist    *shared.Playlist
	StatusCode  int64
}
