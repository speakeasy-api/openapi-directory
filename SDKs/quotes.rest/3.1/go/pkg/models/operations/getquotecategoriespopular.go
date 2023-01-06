package operations

import (
	"openapi/pkg/models/shared"
)

type GetQuoteCategoriesPopularQueryParams struct {
	Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
	Start *int32 `queryParam:"style=form,explode=true,name=start"`
}

type GetQuoteCategoriesPopularSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQuoteCategoriesPopularRequest struct {
	QueryParams GetQuoteCategoriesPopularQueryParams
	Security    GetQuoteCategoriesPopularSecurity
}

type GetQuoteCategoriesPopularResponse struct {
	ContentType string
	StatusCode  int64
}
