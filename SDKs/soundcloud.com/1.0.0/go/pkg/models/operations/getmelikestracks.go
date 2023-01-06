package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeLikesTracksQueryParams struct {
	Limit              *int64 `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool  `queryParam:"style=form,explode=true,name=linked_partitioning"`
}

type GetMeLikesTracksSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeLikesTracksRequest struct {
	QueryParams GetMeLikesTracksQueryParams
	Security    GetMeLikesTracksSecurity
}

type GetMeLikesTracksResponse struct {
	ContentType                             string
	Error                                   *shared.Error
	StatusCode                              int64
	GetMeLikesTracks200ApplicationJSONOneOf *interface{}
}
