package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteImageFontSearchQueryParams struct {
	Query *string `queryParam:"style=form,explode=true,name=query"`
}

type GetQuoteImageFontSearchSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteImageFontSearchRequest struct {
	QueryParams GetQuoteImageFontSearchQueryParams
	Security    GetQuoteImageFontSearchSecurity
}

type GetQuoteImageFontSearchResponse struct {
	ContentType string
	StatusCode  int64
}
