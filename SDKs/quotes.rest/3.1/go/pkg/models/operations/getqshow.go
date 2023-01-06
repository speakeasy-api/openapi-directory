package operations

import (
	"openapi/pkg/models/shared"
)

type GetQshowQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type GetQshowSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQshowRequest struct {
	QueryParams GetQshowQueryParams
	Security    GetQshowSecurity
}

type GetQshowResponse struct {
	ContentType string
	StatusCode  int64
}
