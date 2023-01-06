package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeTracksQueryParams struct {
	Limit              *int64 `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool  `queryParam:"style=form,explode=true,name=linked_partitioning"`
}

type GetMeTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeTracksRequest struct {
	QueryParams GetMeTracksQueryParams
	Security    GetMeTracksSecurity
}

type GetMeTracksResponse struct {
	ContentType                        string
	Error                              *shared.Error
	StatusCode                         int64
	GetMeTracks200ApplicationJSONOneOf *interface{}
}
