package operations

import (
	"openapi/pkg/models/shared"
)

type PostQshowQuotesRemoveQueryParams struct {
	ID      string `queryParam:"style=form,explode=true,name=id"`
	Quoteid string `queryParam:"style=form,explode=true,name=quoteid"`
}

type PostQshowQuotesRemoveSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQshowQuotesRemoveRequest struct {
	QueryParams PostQshowQuotesRemoveQueryParams
	Security    PostQshowQuotesRemoveSecurity
}

type PostQshowQuotesRemoveResponse struct {
	ContentType string
	StatusCode  int64
}
