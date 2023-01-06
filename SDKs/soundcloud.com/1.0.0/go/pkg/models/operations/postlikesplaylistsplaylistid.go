package operations

import (
	"openapi/pkg/models/shared"
)

type PostLikesPlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type PostLikesPlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type PostLikesPlaylistsPlaylistIDRequest struct {
	PathParams PostLikesPlaylistsPlaylistIDPathParams
	Security   PostLikesPlaylistsPlaylistIDSecurity
}

type PostLikesPlaylistsPlaylistIDResponse struct {
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
	TooManyRequests *shared.TooManyRequests
}
