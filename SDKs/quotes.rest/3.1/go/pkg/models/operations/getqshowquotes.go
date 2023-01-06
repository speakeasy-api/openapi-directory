package operations

import (
	"openapi/pkg/models/shared"
)

type GetQshowQuotesQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type GetQshowQuotesSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQshowQuotesRequest struct {
	QueryParams GetQshowQuotesQueryParams
	Security    GetQshowQuotesSecurity
}

type GetQshowQuotesResponse struct {
	ContentType string
	StatusCode  int64
}
