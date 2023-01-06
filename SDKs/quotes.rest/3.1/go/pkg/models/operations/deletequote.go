package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteQuoteQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type DeleteQuoteSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteQuoteRequest struct {
	QueryParams DeleteQuoteQueryParams
	Security    DeleteQuoteSecurity
}

type DeleteQuoteResponse struct {
	ContentType string
	StatusCode  int64
}
