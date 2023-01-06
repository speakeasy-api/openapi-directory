package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRepostsTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type DeleteRepostsTracksTrackIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteRepostsTracksTrackIDRequest struct {
	PathParams DeleteRepostsTracksTrackIDPathParams
	Security   DeleteRepostsTracksTrackIDSecurity
}

type DeleteRepostsTracksTrackIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
