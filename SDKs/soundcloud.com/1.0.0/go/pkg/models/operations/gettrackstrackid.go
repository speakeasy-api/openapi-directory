package operations

import (
	"openapi/pkg/models/shared"
)

type GetTracksTrackIDPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetTracksTrackIDQueryParams struct {
	SecretToken *string `queryParam:"style=form,explode=true,name=secret_token"`
}

type GetTracksTrackIDSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type GetTracksTrackIDRequest struct {
	PathParams  GetTracksTrackIDPathParams
	QueryParams GetTracksTrackIDQueryParams
	Security    GetTracksTrackIDSecurity
}

type GetTracksTrackIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	Track       *shared.Track
}
