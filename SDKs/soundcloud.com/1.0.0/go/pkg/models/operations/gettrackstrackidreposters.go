package operations

import (
	"openapi/pkg/models/shared"
)

type GetTracksTrackIDRepostersPathParams struct {
	TrackID int64 `pathParam:"style=simple,explode=false,name=track_id"`
}

type GetTracksTrackIDRepostersQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetTracksTrackIDRepostersSecurity struct {
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=query"`
}

type GetTracksTrackIDRepostersRequest struct {
	PathParams  GetTracksTrackIDRepostersPathParams
	QueryParams GetTracksTrackIDRepostersQueryParams
	Security    GetTracksTrackIDRepostersSecurity
}

type GetTracksTrackIDRepostersResponse struct {
	ContentType string
	Error       *shared.Error
	MetaUsers   *shared.MetaUsers
	StatusCode  int64
}
