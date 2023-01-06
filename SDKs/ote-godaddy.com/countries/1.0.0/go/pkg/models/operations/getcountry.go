package operations

type GetCountryPathParams struct {
	CountryKey string `pathParam:"style=simple,explode=false,name=countryKey"`
}

type GetCountryOrderEnum string

const (
	GetCountryOrderEnumAscending  GetCountryOrderEnum = "ascending"
	GetCountryOrderEnumDescending GetCountryOrderEnum = "descending"
)

type GetCountrySortEnum string

const (
	GetCountrySortEnumKey   GetCountrySortEnum = "key"
	GetCountrySortEnumLabel GetCountrySortEnum = "label"
)

type GetCountryQueryParams struct {
	MarketID string               `queryParam:"style=form,explode=true,name=marketId"`
	Order    *GetCountryOrderEnum `queryParam:"style=form,explode=true,name=order"`
	Sort     *GetCountrySortEnum  `queryParam:"style=form,explode=true,name=sort"`
}

type GetCountryRequest struct {
	PathParams  GetCountryPathParams
	QueryParams GetCountryQueryParams
}

type GetCountryResponse struct {
	ArrayOfCountry []interface{}
	ContentType    string
	Error          *interface{}
	ErrorLimit     *interface{}
	StatusCode     int64
}
