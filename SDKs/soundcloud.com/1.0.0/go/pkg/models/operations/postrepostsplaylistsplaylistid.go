package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepostsPlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type PostRepostsPlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepostsPlaylistsPlaylistIDRequest struct {
	PathParams PostRepostsPlaylistsPlaylistIDPathParams
	Security   PostRepostsPlaylistsPlaylistIDSecurity
}

type PostRepostsPlaylistsPlaylistIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
