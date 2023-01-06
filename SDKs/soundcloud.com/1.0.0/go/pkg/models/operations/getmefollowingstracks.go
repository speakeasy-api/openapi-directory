package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeFollowingsTracksQueryParams struct {
	Access []shared.AccessEnum `queryParam:"style=form,explode=false,name=access"`
	Limit  *int64              `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64              `queryParam:"style=form,explode=true,name=offset"`
}

type GetMeFollowingsTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeFollowingsTracksRequest struct {
	QueryParams GetMeFollowingsTracksQueryParams
	Security    GetMeFollowingsTracksSecurity
}

type GetMeFollowingsTracksResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	TracksList  []shared.Track
}
