package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteSearchQueryParams struct {
	Author    *string `queryParam:"style=form,explode=true,name=author"`
	Category  *string `queryParam:"style=form,explode=true,name=category"`
	Language  *string `queryParam:"style=form,explode=true,name=language"`
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Maxlength *int32  `queryParam:"style=form,explode=true,name=maxlength"`
	Minlength *int32  `queryParam:"style=form,explode=true,name=minlength"`
	Private   *bool   `queryParam:"style=form,explode=true,name=private"`
	Query     *string `queryParam:"style=form,explode=true,name=query"`
	Sfw       *bool   `queryParam:"style=form,explode=true,name=sfw"`
}

type GetQuoteSearchSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteSearchRequest struct {
	QueryParams GetQuoteSearchQueryParams
	Security    GetQuoteSearchSecurity
}

type GetQuoteSearchResponse struct {
	ContentType   string
	QuoteResponse *interface{}
	StatusCode    int64
}
