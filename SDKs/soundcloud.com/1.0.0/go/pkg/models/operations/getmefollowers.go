package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeFollowersQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
}

type GetMeFollowersSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeFollowersRequest struct {
	QueryParams GetMeFollowersQueryParams
	Security    GetMeFollowersSecurity
}

type GetMeFollowersResponse struct {
	ContentType                           string
	Error                                 *shared.Error
	StatusCode                            int64
	GetMeFollowers200ApplicationJSONOneOf *interface{}
}
