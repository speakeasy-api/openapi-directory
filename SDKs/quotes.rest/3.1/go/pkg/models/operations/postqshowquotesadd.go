package operations

import (
	"openapi/pkg/models/shared"
)

type PostQshowQuotesAddQueryParams struct {
	ID      string `queryParam:"style=form,explode=true,name=id"`
	Quoteid string `queryParam:"style=form,explode=true,name=quoteid"`
}

type PostQshowQuotesAddSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQshowQuotesAddRequest struct {
	QueryParams PostQshowQuotesAddQueryParams
	Security    PostQshowQuotesAddSecurity
}

type PostQshowQuotesAddResponse struct {
	ContentType string
	StatusCode  int64
}
