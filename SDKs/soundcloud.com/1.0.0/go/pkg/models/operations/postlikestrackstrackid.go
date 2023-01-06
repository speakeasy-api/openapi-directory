package operations

import (
	"openapi/pkg/models/shared"
)

type PostLikesTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type PostLikesTracksTrackIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type PostLikesTracksTrackIDRequest struct {
	PathParams PostLikesTracksTrackIDPathParams
	Security   PostLikesTracksTrackIDSecurity
}

type PostLikesTracksTrackIDResponse struct {
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
	TooManyRequests *shared.TooManyRequests
}
