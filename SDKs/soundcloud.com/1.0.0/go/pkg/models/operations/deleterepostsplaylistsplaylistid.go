package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepostsPlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type DeleteRepostsPlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepostsPlaylistsPlaylistIDRequest struct {
	PathParams DeleteRepostsPlaylistsPlaylistIDPathParams
	Security   DeleteRepostsPlaylistsPlaylistIDSecurity
}

type DeleteRepostsPlaylistsPlaylistIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
