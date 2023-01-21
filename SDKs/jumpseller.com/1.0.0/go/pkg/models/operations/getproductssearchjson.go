package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsSearchJSONQueryParams struct {
	Authtoken string                  `queryParam:"style=form,explode=true,name=authtoken"`
	Fields    *shared.LocaleParamEnum `queryParam:"style=form,explode=true,name=fields"`
	Locale    *string                 `queryParam:"style=form,explode=true,name=locale"`
	Login     string                  `queryParam:"style=form,explode=true,name=login"`
	Query     string                  `queryParam:"style=form,explode=true,name=query"`
}

type GetProductsSearchJSONRequest struct {
	QueryParams GetProductsSearchJSONQueryParams
}

type GetProductsSearchJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Products    []shared.Product
	StatusCode  int64
}
