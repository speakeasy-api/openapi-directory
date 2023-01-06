package operations

import (
	"openapi/pkg/models/shared"
)

type PostRepostsTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type PostRepostsTracksTrackIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type PostRepostsTracksTrackIDRequest struct {
	PathParams PostRepostsTracksTrackIDPathParams
	Security   PostRepostsTracksTrackIDSecurity
}

type PostRepostsTracksTrackIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
