package operations

import (
	"openapi/pkg/models/shared"
)

type GetPlaylistsPlaylistIDTracksPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type GetPlaylistsPlaylistIDTracksQueryParams struct {
	Access             []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	LinkedPartitioning *bool               `queryParam:"style=form,explode=true,name=linked_partitioning"`
	SecretToken        *string             `queryParam:"style=form,explode=true,name=secret_token"`
}

type GetPlaylistsPlaylistIDTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetPlaylistsPlaylistIDTracksRequest struct {
	PathParams  GetPlaylistsPlaylistIDTracksPathParams
	QueryParams GetPlaylistsPlaylistIDTracksQueryParams
	Security    GetPlaylistsPlaylistIDTracksSecurity
}

type GetPlaylistsPlaylistIDTracksResponse struct {
	ContentType                                         string
	Error                                               *shared.Error
	StatusCode                                          int64
	GetPlaylistsPlaylistIDTracks200ApplicationJSONOneOf *interface{}
}
