package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeFollowingsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetMeFollowingsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeFollowingsRequest struct {
	QueryParams GetMeFollowingsQueryParams
	Security    GetMeFollowingsSecurity
}

type GetMeFollowingsResponse struct {
	ContentType                            string
	Error                                  *shared.Error
	StatusCode                             int64
	GetMeFollowings200ApplicationJSONOneOf *interface{}
}
