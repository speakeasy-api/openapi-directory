package operations

import (
	"openapi/pkg/models/shared"
)

type PostTracksTrackIDCommentsPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type PostTracksTrackIDCommentsRequestBodyComment struct {
	Body      string       `json:"body"`
	Timestamp *interface{} `json:"timestamp,omitempty"`
}

type PostTracksTrackIDCommentsRequestBody struct {
	Comment *PostTracksTrackIDCommentsRequestBodyComment `json:"comment,omitempty"`
}

type PostTracksTrackIDCommentsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type PostTracksTrackIDCommentsRequest struct {
	PathParams PostTracksTrackIDCommentsPathParams
	Request    PostTracksTrackIDCommentsRequestBody `request:"mediaType=application/json"`
	Security   PostTracksTrackIDCommentsSecurity
}

type PostTracksTrackIDCommentsResponse struct {
	Comment         *shared.Comment
	ContentType     string
	Error           *shared.Error
	StatusCode      int64
	TooManyRequests *shared.TooManyRequests
}
