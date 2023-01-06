package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type DeleteTracksTrackIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteTracksTrackIDRequest struct {
	PathParams DeleteTracksTrackIDPathParams
	Security   DeleteTracksTrackIDSecurity
}

type DeleteTracksTrackIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
