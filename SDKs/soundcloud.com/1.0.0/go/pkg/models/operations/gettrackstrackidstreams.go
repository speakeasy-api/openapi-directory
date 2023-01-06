package operations

import (
	"openapi/pkg/models/shared"
)

type GetTracksTrackIDStreamsPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetTracksTrackIDStreamsQueryParams struct {
	SecretToken *string `queryParam:"style=form,explode=true,name=secret_token"`
}

type GetTracksTrackIDStreamsSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type GetTracksTrackIDStreamsRequest struct {
	PathParams  GetTracksTrackIDStreamsPathParams
	QueryParams GetTracksTrackIDStreamsQueryParams
	Security    GetTracksTrackIDStreamsSecurity
}

type GetTracksTrackIDStreamsResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Streams     *shared.Streams
}
