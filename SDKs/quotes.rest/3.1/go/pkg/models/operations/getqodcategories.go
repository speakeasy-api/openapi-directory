package operations

import (
	"openapi/pkg/models/shared"
)

type GetQodCategoriesQueryParams struct {
	Detailed *bool   `queryParam:"style=form,explode=true,name=detailed"`
	Language *string `queryParam:"style=form,explode=true,name=language"`
}

type GetQodCategoriesSecurity struct {
	XTheySaidSoAPISecret shared.SchemeXTheySaidSoAPISecret `security:"scheme,type=apiKey,subtype=header"`
}

type GetQodCategoriesRequest struct {
	QueryParams GetQodCategoriesQueryParams
	Security    GetQodCategoriesSecurity
}

type GetQodCategoriesResponse struct {
	ContentType string
	StatusCode  int64
}
