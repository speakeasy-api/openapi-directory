package operations

type GetCountriesOrderEnum string

const (
	GetCountriesOrderEnumAscending  GetCountriesOrderEnum = "ascending"
	GetCountriesOrderEnumDescending GetCountriesOrderEnum = "descending"
)

type GetCountriesSortEnum string

const (
	GetCountriesSortEnumKey   GetCountriesSortEnum = "key"
	GetCountriesSortEnumLabel GetCountriesSortEnum = "label"
)

type GetCountriesQueryParams struct {
	MarketID     string                 `queryParam:"style=form,explode=true,name=marketId"`
	Order        *GetCountriesOrderEnum `queryParam:"style=form,explode=true,name=order"`
	RegionName   *string                `queryParam:"style=form,explode=true,name=regionName"`
	RegionTypeID *int64                 `queryParam:"style=form,explode=true,name=regionTypeId"`
	Sort         *GetCountriesSortEnum  `queryParam:"style=form,explode=true,name=sort"`
}

type GetCountriesRequest struct {
	QueryParams GetCountriesQueryParams
}

type GetCountriesResponse struct {
	ArrayOfCountrySummary []interface{}
	ContentType           string
	Error                 *interface{}
	ErrorLimit            *interface{}
	StatusCode            int64
}
