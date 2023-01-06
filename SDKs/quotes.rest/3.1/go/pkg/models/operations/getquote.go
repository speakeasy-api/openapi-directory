package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type GetQuoteSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteRequest struct {
	QueryParams GetQuoteQueryParams
	Security    GetQuoteSecurity
}

type GetQuoteResponse struct {
	ContentType   string
	QuoteResponse *interface{}
	StatusCode    int64
}
