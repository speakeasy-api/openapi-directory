package operations

import (
	"openapi/pkg/models/shared"
)

type PatchQuoteQueryParams struct {
	Author   *string `queryParam:"style=form,explode=true,name=author"`
	ID       string  `queryParam:"style=form,explode=true,name=id"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Quote    *string `queryParam:"style=form,explode=true,name=quote"`
	Tags     *string `queryParam:"style=form,explode=true,name=tags"`
}

type PatchQuoteSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type PatchQuoteRequest struct {
	QueryParams PatchQuoteQueryParams
	Security    PatchQuoteSecurity
}

type PatchQuoteResponse struct {
	ContentType string
	StatusCode  int64
}
