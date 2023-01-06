package operations

import (
	"openapi/pkg/models/shared"
)

type GetMeConnectionsQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetMeConnectionsSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

type GetMeConnectionsRequest struct {
	QueryParams GetMeConnectionsQueryParams
	Security    GetMeConnectionsSecurity
}

type GetMeConnectionsResponse struct {
	Connections []shared.Connection
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
