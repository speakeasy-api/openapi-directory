package operations

import (
	"openapi/pkg/models/shared"
)

type PostTracksRequests struct {
	TrackDataRequest  *shared.TrackDataRequest `request:"mediaType=multipart/form-data"`
	TrackDataRequest1 *shared.TrackDataRequest `request:"mediaType=multipart/x-www-form-urlencoded"`
}

type PostTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type PostTracksRequest struct {
	Request  *PostTracksRequests
	Security PostTracksSecurity
}

type PostTracksResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Track       *shared.Track
}
