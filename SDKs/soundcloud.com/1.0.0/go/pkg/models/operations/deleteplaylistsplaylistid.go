package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type DeletePlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type DeletePlaylistsPlaylistIDRequest struct {
	PathParams DeletePlaylistsPlaylistIDPathParams
	Security   DeletePlaylistsPlaylistIDSecurity
}

type DeletePlaylistsPlaylistIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
