package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteAuthorsSearchQueryParams struct {
	Detailed *bool   `queryParam:"style=form,explode=true,name=detailed"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Limit    *int32  `queryParam:"style=form,explode=true,name=limit"`
	Query    *string `queryParam:"style=form,explode=true,name=query"`
	Start    *int32  `queryParam:"style=form,explode=true,name=start"`
}

type GetQuoteAuthorsSearchSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteAuthorsSearchRequest struct {
	QueryParams GetQuoteAuthorsSearchQueryParams
	Security    GetQuoteAuthorsSearchSecurity
}

type GetQuoteAuthorsSearchResponse struct {
	ContentType string
	StatusCode  int64
}
