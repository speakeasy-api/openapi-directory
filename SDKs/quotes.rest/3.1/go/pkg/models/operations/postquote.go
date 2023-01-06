package operations

import (
	"openapi/pkg/models/shared"
)

type PostQuoteQueryParams struct {
	Author   *string `queryParam:"style=form,explode=true,name=author"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Quote    string  `queryParam:"style=form,explode=true,name=quote"`
	Tags     *string `queryParam:"style=form,explode=true,name=tags"`
}

type PostQuoteSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PostQuoteRequest struct {
	QueryParams PostQuoteQueryParams
	Security    PostQuoteSecurity
}

type PostQuoteResponse struct {
	ContentType string
	StatusCode  int64
}
