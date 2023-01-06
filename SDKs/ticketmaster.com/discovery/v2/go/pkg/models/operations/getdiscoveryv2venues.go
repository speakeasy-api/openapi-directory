package operations

type GetDiscoveryV2VenuesIncludeLicensedContentEnum string

const (
	GetDiscoveryV2VenuesIncludeLicensedContentEnumYes GetDiscoveryV2VenuesIncludeLicensedContentEnum = "yes"
	GetDiscoveryV2VenuesIncludeLicensedContentEnumNo  GetDiscoveryV2VenuesIncludeLicensedContentEnum = " no"
)

type GetDiscoveryV2VenuesIncludeSpellcheckEnum string

const (
	GetDiscoveryV2VenuesIncludeSpellcheckEnumYes GetDiscoveryV2VenuesIncludeSpellcheckEnum = "yes"
	GetDiscoveryV2VenuesIncludeSpellcheckEnumNo  GetDiscoveryV2VenuesIncludeSpellcheckEnum = " no"
)

type GetDiscoveryV2VenuesIncludeTestEnum string

const (
	GetDiscoveryV2VenuesIncludeTestEnumYes  GetDiscoveryV2VenuesIncludeTestEnum = "yes"
	GetDiscoveryV2VenuesIncludeTestEnumNo   GetDiscoveryV2VenuesIncludeTestEnum = " no"
	GetDiscoveryV2VenuesIncludeTestEnumOnly GetDiscoveryV2VenuesIncludeTestEnum = " only"
)

type GetDiscoveryV2VenuesSourceEnum string

const (
	GetDiscoveryV2VenuesSourceEnumTicketmaster GetDiscoveryV2VenuesSourceEnum = "ticketmaster"
	GetDiscoveryV2VenuesSourceEnumUniverse     GetDiscoveryV2VenuesSourceEnum = " universe"
	GetDiscoveryV2VenuesSourceEnumFrontgate    GetDiscoveryV2VenuesSourceEnum = " frontgate"
	GetDiscoveryV2VenuesSourceEnumTmr          GetDiscoveryV2VenuesSourceEnum = " tmr"
)

type GetDiscoveryV2VenuesUnitEnum string

const (
	GetDiscoveryV2VenuesUnitEnumMiles GetDiscoveryV2VenuesUnitEnum = "miles"
	GetDiscoveryV2VenuesUnitEnumKm    GetDiscoveryV2VenuesUnitEnum = "km"
)

type GetDiscoveryV2VenuesQueryParams struct {
	CountryCode            *string                                         `queryParam:"style=form,explode=true,name=countryCode"`
	GeoPoint               *string                                         `queryParam:"style=form,explode=true,name=geoPoint"`
	ID                     *string                                         `queryParam:"style=form,explode=true,name=id"`
	IncludeLicensedContent *GetDiscoveryV2VenuesIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	IncludeSpellcheck      *GetDiscoveryV2VenuesIncludeSpellcheckEnum      `queryParam:"style=form,explode=true,name=includeSpellcheck"`
	IncludeTest            *GetDiscoveryV2VenuesIncludeTestEnum            `queryParam:"style=form,explode=true,name=includeTest"`
	Keyword                *string                                         `queryParam:"style=form,explode=true,name=keyword"`
	Latlong                *string                                         `queryParam:"style=form,explode=true,name=latlong"`
	Locale                 *string                                         `queryParam:"style=form,explode=true,name=locale"`
	Page                   *string                                         `queryParam:"style=form,explode=true,name=page"`
	Radius                 *string                                         `queryParam:"style=form,explode=true,name=radius"`
	Size                   *string                                         `queryParam:"style=form,explode=true,name=size"`
	Sort                   *string                                         `queryParam:"style=form,explode=true,name=sort"`
	Source                 *GetDiscoveryV2VenuesSourceEnum                 `queryParam:"style=form,explode=true,name=source"`
	StateCode              *string                                         `queryParam:"style=form,explode=true,name=stateCode"`
	Unit                   *GetDiscoveryV2VenuesUnitEnum                   `queryParam:"style=form,explode=true,name=unit"`
}

type GetDiscoveryV2VenuesRequest struct {
	QueryParams GetDiscoveryV2VenuesQueryParams
}

type GetDiscoveryV2VenuesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
