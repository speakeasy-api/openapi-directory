package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteRandomQueryParams struct {
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type GetQuoteRandomSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteRandomRequest struct {
	QueryParams GetQuoteRandomQueryParams
	Security    GetQuoteRandomSecurity
}

type GetQuoteRandomResponse struct {
	ContentType   string
	QuoteResponse *interface{}
	StatusCode    int64
}
