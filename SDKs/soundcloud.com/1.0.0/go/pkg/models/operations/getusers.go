package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	Ids                *string `queryParam:"style=form,explode=true,name=ids"`
	Limit              *int64  `queryParam:"style=form,explode=true,name=limit"`
	LinkedPartitioning *bool   `queryParam:"style=form,explode=true,name=linked_partitioning"`
	Offset             *int64  `queryParam:"style=form,explode=true,name=offset"`
	Q                  string  `queryParam:"style=form,explode=true,name=q"`
}

type GetUsersSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
	Security    GetUsersSecurity
}

type GetUsersResponse struct {
	ContentType                     string
	Error                           *shared.Error
	StatusCode                      int64
	GetUsers200ApplicationJSONOneOf *interface{}
}
