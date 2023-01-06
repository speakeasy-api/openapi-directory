package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLikesPlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type DeleteLikesPlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteLikesPlaylistsPlaylistIDRequest struct {
	PathParams DeleteLikesPlaylistsPlaylistIDPathParams
	Security   DeleteLikesPlaylistsPlaylistIDSecurity
}

type DeleteLikesPlaylistsPlaylistIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
