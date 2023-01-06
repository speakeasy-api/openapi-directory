package operations

import (
	"openapi/pkg/models/shared"
)

type PutQuoteQueryParams struct {
	Author   *string `queryParam:"style=form,explode=true,name=author"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Quote    string  `queryParam:"style=form,explode=true,name=quote"`
	Tags     *string `queryParam:"style=form,explode=true,name=tags"`
}

type PutQuoteSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PutQuoteRequest struct {
	QueryParams PutQuoteQueryParams
	Security    PutQuoteSecurity
}

type PutQuoteResponse struct {
	ContentType string
	StatusCode  int64
}
