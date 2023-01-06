package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteCategoriesSearchQueryParams struct {
	Limit *int32  `queryParam:"style=form,explode=true,name=limit"`
	Query *string `queryParam:"style=form,explode=true,name=query"`
	Start *int32  `queryParam:"style=form,explode=true,name=start"`
}

type GetQuoteCategoriesSearchSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteCategoriesSearchRequest struct {
	QueryParams GetQuoteCategoriesSearchQueryParams
	Security    GetQuoteCategoriesSearchSecurity
}

type GetQuoteCategoriesSearchResponse struct {
	ContentType string
	StatusCode  int64
}
