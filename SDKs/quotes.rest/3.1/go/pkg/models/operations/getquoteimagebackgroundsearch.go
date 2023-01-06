package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteImageBackgroundSearchQueryParams struct {
	Query *string `queryParam:"style=form,explode=true,name=query"`
}

type GetQuoteImageBackgroundSearchSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteImageBackgroundSearchRequest struct {
	QueryParams GetQuoteImageBackgroundSearchQueryParams
	Security    GetQuoteImageBackgroundSearchSecurity
}

type GetQuoteImageBackgroundSearchResponse struct {
	ContentType string
	StatusCode  int64
}
