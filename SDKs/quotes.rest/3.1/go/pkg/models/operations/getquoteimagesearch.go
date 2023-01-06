package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteImageSearchQueryParams struct {
	Author   *string `queryParam:"style=form,explode=true,name=author"`
	Category *string `queryParam:"style=form,explode=true,name=category"`
	Private  *bool   `queryParam:"style=form,explode=true,name=private"`
}

type GetQuoteImageSearchSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteImageSearchRequest struct {
	QueryParams GetQuoteImageSearchQueryParams
	Security    GetQuoteImageSearchSecurity
}

type GetQuoteImageSearchResponse struct {
	ContentType string
	StatusCode  int64
}
