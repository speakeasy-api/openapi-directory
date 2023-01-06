package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetMeTracksTrackIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeTracksTrackIDRequest struct {
	PathParams GetMeTracksTrackIDPathParams
	Security   GetMeTracksTrackIDSecurity
}

type GetMeTracksTrackIDResponse struct {
	ContentType string
	StatusCode  int64
	Track       *shared.Track
}
