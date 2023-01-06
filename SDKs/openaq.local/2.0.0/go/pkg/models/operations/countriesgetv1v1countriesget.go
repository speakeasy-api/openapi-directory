package operations

import (
	"openapi/pkg/models/shared"
)

type CountriesGetv1V1CountriesGetQueryParams struct {
	Country   []string               `queryParam:"style=form,explode=true,name=country"`
	CountryID *string                `queryParam:"style=form,explode=true,name=country_id"`
	Limit     *int64                 `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int64                 `queryParam:"style=form,explode=true,name=offset"`
	OrderBy   map[string]interface{} `queryParam:"style=form,explode=true,name=order_by"`
	Page      *int64                 `queryParam:"style=form,explode=true,name=page"`
	Sort      map[string]interface{} `queryParam:"style=form,explode=true,name=sort"`
}

type CountriesGetv1V1CountriesGetRequest struct {
	QueryParams CountriesGetv1V1CountriesGetQueryParams
}

type CountriesGetv1V1CountriesGetResponse struct {
	ContentType           string
	HTTPValidationError   *shared.HTTPValidationError
	OpenAQCountriesResult *shared.OpenAqCountriesResult
	StatusCode            int64
}
