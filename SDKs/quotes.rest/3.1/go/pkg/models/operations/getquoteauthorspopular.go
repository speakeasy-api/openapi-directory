package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteAuthorsPopularQueryParams struct {
	Detailed *bool   `queryParam:"style=form,explode=true,name=detailed"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
	Limit    *int32  `queryParam:"style=form,explode=true,name=limit"`
	Start    *int32  `queryParam:"style=form,explode=true,name=start"`
}

type GetQuoteAuthorsPopularSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteAuthorsPopularRequest struct {
	QueryParams GetQuoteAuthorsPopularQueryParams
	Security    GetQuoteAuthorsPopularSecurity
}

type GetQuoteAuthorsPopularResponse struct {
	ContentType string
	StatusCode  int64
}
