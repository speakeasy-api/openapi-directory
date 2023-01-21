package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsStatusStatusJSONPathParams struct {
	Status shared.LocaleParamEnum1 `pathParam:"style=simple,explode=false,name=status"`
}

type GetProductsStatusStatusJSONQueryParams struct {
	Authtoken string  `queryParam:"style=form,explode=true,name=authtoken"`
	Locale    *string `queryParam:"style=form,explode=true,name=locale"`
	Login     string  `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsStatusStatusJSONRequest struct {
	PathParams  GetProductsStatusStatusJSONPathParams
	QueryParams GetProductsStatusStatusJSONQueryParams
}

type GetProductsStatusStatusJSONResponse struct {
	ContentType   string
	Products      []shared.Product
	StatusCode    int64
	StatusInvalid *interface{}
}
