package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLikesTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type DeleteLikesTracksTrackIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteLikesTracksTrackIDRequest struct {
	PathParams DeleteLikesTracksTrackIDPathParams
	Security   DeleteLikesTracksTrackIDSecurity
}

type DeleteLikesTracksTrackIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
