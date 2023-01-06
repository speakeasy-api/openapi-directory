package operations

import (
	"openapi/pkg/models/shared"
)

type PutTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type PutTracksTrackIDRequests struct {
	TrackDataRequest     *shared.TrackDataRequest     `request:"mediaType=multipart/form-data"`
	TrackDataRequest1    *shared.TrackDataRequest     `request:"mediaType=multipart/x-www-form-urlencoded"`
	TrackMetadataRequest *shared.TrackMetadataRequest `request:"mediaType=application/json"`
}

type PutTracksTrackIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type PutTracksTrackIDRequest struct {
	PathParams PutTracksTrackIDPathParams
	Request    *PutTracksTrackIDRequests
	Security   PutTracksTrackIDSecurity
}

type PutTracksTrackIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Track       *shared.Track
}
