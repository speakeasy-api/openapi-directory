package operations

type GetDiscoveryV2SuggestIncludeFuzzyEnum string

const (
	GetDiscoveryV2SuggestIncludeFuzzyEnumYes GetDiscoveryV2SuggestIncludeFuzzyEnum = "yes"
	GetDiscoveryV2SuggestIncludeFuzzyEnumNo  GetDiscoveryV2SuggestIncludeFuzzyEnum = " no"
)

type GetDiscoveryV2SuggestIncludeLicensedContentEnum string

const (
	GetDiscoveryV2SuggestIncludeLicensedContentEnumYes GetDiscoveryV2SuggestIncludeLicensedContentEnum = "yes"
	GetDiscoveryV2SuggestIncludeLicensedContentEnumNo  GetDiscoveryV2SuggestIncludeLicensedContentEnum = " no"
)

type GetDiscoveryV2SuggestIncludeSpellcheckEnum string

const (
	GetDiscoveryV2SuggestIncludeSpellcheckEnumYes GetDiscoveryV2SuggestIncludeSpellcheckEnum = "yes"
	GetDiscoveryV2SuggestIncludeSpellcheckEnumNo  GetDiscoveryV2SuggestIncludeSpellcheckEnum = " no"
)

type GetDiscoveryV2SuggestIncludeTbaEnum string

const (
	GetDiscoveryV2SuggestIncludeTbaEnumYes  GetDiscoveryV2SuggestIncludeTbaEnum = "yes"
	GetDiscoveryV2SuggestIncludeTbaEnumNo   GetDiscoveryV2SuggestIncludeTbaEnum = " no"
	GetDiscoveryV2SuggestIncludeTbaEnumOnly GetDiscoveryV2SuggestIncludeTbaEnum = " only"
)

type GetDiscoveryV2SuggestIncludeTbdEnum string

const (
	GetDiscoveryV2SuggestIncludeTbdEnumYes  GetDiscoveryV2SuggestIncludeTbdEnum = "yes"
	GetDiscoveryV2SuggestIncludeTbdEnumNo   GetDiscoveryV2SuggestIncludeTbdEnum = " no"
	GetDiscoveryV2SuggestIncludeTbdEnumOnly GetDiscoveryV2SuggestIncludeTbdEnum = " only"
)

type GetDiscoveryV2SuggestSourceEnum string

const (
	GetDiscoveryV2SuggestSourceEnumTicketmaster GetDiscoveryV2SuggestSourceEnum = "ticketmaster"
	GetDiscoveryV2SuggestSourceEnumUniverse     GetDiscoveryV2SuggestSourceEnum = " universe"
	GetDiscoveryV2SuggestSourceEnumFrontgate    GetDiscoveryV2SuggestSourceEnum = " frontgate"
	GetDiscoveryV2SuggestSourceEnumTmr          GetDiscoveryV2SuggestSourceEnum = " tmr"
)

type GetDiscoveryV2SuggestUnitEnum string

const (
	GetDiscoveryV2SuggestUnitEnumMiles GetDiscoveryV2SuggestUnitEnum = "miles"
	GetDiscoveryV2SuggestUnitEnumKm    GetDiscoveryV2SuggestUnitEnum = "km"
)

type GetDiscoveryV2SuggestQueryParams struct {
	ClientVisibility       *string                                          `queryParam:"style=form,explode=true,name=clientVisibility"`
	CountryCode            *string                                          `queryParam:"style=form,explode=true,name=countryCode"`
	GeoPoint               *string                                          `queryParam:"style=form,explode=true,name=geoPoint"`
	IncludeFuzzy           *GetDiscoveryV2SuggestIncludeFuzzyEnum           `queryParam:"style=form,explode=true,name=includeFuzzy"`
	IncludeLicensedContent *GetDiscoveryV2SuggestIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	IncludeSpellcheck      *GetDiscoveryV2SuggestIncludeSpellcheckEnum      `queryParam:"style=form,explode=true,name=includeSpellcheck"`
	IncludeTBA             *GetDiscoveryV2SuggestIncludeTbaEnum             `queryParam:"style=form,explode=true,name=includeTBA"`
	IncludeTBD             *GetDiscoveryV2SuggestIncludeTbdEnum             `queryParam:"style=form,explode=true,name=includeTBD"`
	Keyword                *string                                          `queryParam:"style=form,explode=true,name=keyword"`
	Latlong                *string                                          `queryParam:"style=form,explode=true,name=latlong"`
	Locale                 *string                                          `queryParam:"style=form,explode=true,name=locale"`
	Radius                 *string                                          `queryParam:"style=form,explode=true,name=radius"`
	SegmentID              *string                                          `queryParam:"style=form,explode=true,name=segmentId"`
	Size                   *string                                          `queryParam:"style=form,explode=true,name=size"`
	Source                 *GetDiscoveryV2SuggestSourceEnum                 `queryParam:"style=form,explode=true,name=source"`
	Unit                   *GetDiscoveryV2SuggestUnitEnum                   `queryParam:"style=form,explode=true,name=unit"`
}

type GetDiscoveryV2SuggestRequest struct {
	QueryParams GetDiscoveryV2SuggestQueryParams
}

type GetDiscoveryV2SuggestResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetDiscoveryV2Suggest200ApplicationHalPlusJSONString *string
	GetDiscoveryV2Suggest200ApplicationJSONString        *string
}
