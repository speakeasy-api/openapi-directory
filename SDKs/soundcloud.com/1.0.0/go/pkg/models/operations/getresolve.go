package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolveQueryParams struct {
	URL string `queryParam:"style=form,explode=true,name=url"`
}

type GetResolveSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
	ClientID   shared.SchemeClientID   `security:"scheme,type=apiKey,subtype=query"`
}

type GetResolveRequest struct {
	QueryParams GetResolveQueryParams
	Security    GetResolveSecurity
}

type GetResolveResponse struct {
	ContentType string
	Found       *shared.Found
	StatusCode  int64
}
