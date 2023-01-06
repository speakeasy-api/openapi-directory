package operations

type GetDiscoveryV2EventsIncludeLicensedContentEnum string

const (
	GetDiscoveryV2EventsIncludeLicensedContentEnumYes GetDiscoveryV2EventsIncludeLicensedContentEnum = "yes"
	GetDiscoveryV2EventsIncludeLicensedContentEnumNo  GetDiscoveryV2EventsIncludeLicensedContentEnum = " no"
)

type GetDiscoveryV2EventsIncludeSpellcheckEnum string

const (
	GetDiscoveryV2EventsIncludeSpellcheckEnumYes GetDiscoveryV2EventsIncludeSpellcheckEnum = "yes"
	GetDiscoveryV2EventsIncludeSpellcheckEnumNo  GetDiscoveryV2EventsIncludeSpellcheckEnum = " no"
)

type GetDiscoveryV2EventsIncludeTbaEnum string

const (
	GetDiscoveryV2EventsIncludeTbaEnumYes  GetDiscoveryV2EventsIncludeTbaEnum = "yes"
	GetDiscoveryV2EventsIncludeTbaEnumNo   GetDiscoveryV2EventsIncludeTbaEnum = " no"
	GetDiscoveryV2EventsIncludeTbaEnumOnly GetDiscoveryV2EventsIncludeTbaEnum = " only"
)

type GetDiscoveryV2EventsIncludeTbdEnum string

const (
	GetDiscoveryV2EventsIncludeTbdEnumYes  GetDiscoveryV2EventsIncludeTbdEnum = "yes"
	GetDiscoveryV2EventsIncludeTbdEnumNo   GetDiscoveryV2EventsIncludeTbdEnum = " no"
	GetDiscoveryV2EventsIncludeTbdEnumOnly GetDiscoveryV2EventsIncludeTbdEnum = " only"
)

type GetDiscoveryV2EventsIncludeTestEnum string

const (
	GetDiscoveryV2EventsIncludeTestEnumYes  GetDiscoveryV2EventsIncludeTestEnum = "yes"
	GetDiscoveryV2EventsIncludeTestEnumNo   GetDiscoveryV2EventsIncludeTestEnum = " no"
	GetDiscoveryV2EventsIncludeTestEnumOnly GetDiscoveryV2EventsIncludeTestEnum = " only"
)

type GetDiscoveryV2EventsSourceEnum string

const (
	GetDiscoveryV2EventsSourceEnumTicketmaster GetDiscoveryV2EventsSourceEnum = "ticketmaster"
	GetDiscoveryV2EventsSourceEnumUniverse     GetDiscoveryV2EventsSourceEnum = " universe"
	GetDiscoveryV2EventsSourceEnumFrontgate    GetDiscoveryV2EventsSourceEnum = " frontgate"
	GetDiscoveryV2EventsSourceEnumTmr          GetDiscoveryV2EventsSourceEnum = " tmr"
)

type GetDiscoveryV2EventsUnitEnum string

const (
	GetDiscoveryV2EventsUnitEnumMiles GetDiscoveryV2EventsUnitEnum = "miles"
	GetDiscoveryV2EventsUnitEnumKm    GetDiscoveryV2EventsUnitEnum = "km"
)

type GetDiscoveryV2EventsQueryParams struct {
	AttractionID           *string                                         `queryParam:"style=form,explode=true,name=attractionId"`
	City                   *string                                         `queryParam:"style=form,explode=true,name=city"`
	ClassificationID       []interface{}                                   `queryParam:"style=form,explode=true,name=classificationId"`
	ClassificationName     []interface{}                                   `queryParam:"style=form,explode=true,name=classificationName"`
	ClientVisibility       *string                                         `queryParam:"style=form,explode=true,name=clientVisibility"`
	CountryCode            *string                                         `queryParam:"style=form,explode=true,name=countryCode"`
	DmaID                  *string                                         `queryParam:"style=form,explode=true,name=dmaId"`
	EndDateTime            *string                                         `queryParam:"style=form,explode=true,name=endDateTime"`
	GeoPoint               *string                                         `queryParam:"style=form,explode=true,name=geoPoint"`
	ID                     *string                                         `queryParam:"style=form,explode=true,name=id"`
	IncludeLicensedContent *GetDiscoveryV2EventsIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	IncludeSpellcheck      *GetDiscoveryV2EventsIncludeSpellcheckEnum      `queryParam:"style=form,explode=true,name=includeSpellcheck"`
	IncludeTBA             *GetDiscoveryV2EventsIncludeTbaEnum             `queryParam:"style=form,explode=true,name=includeTBA"`
	IncludeTBD             *GetDiscoveryV2EventsIncludeTbdEnum             `queryParam:"style=form,explode=true,name=includeTBD"`
	IncludeTest            *GetDiscoveryV2EventsIncludeTestEnum            `queryParam:"style=form,explode=true,name=includeTest"`
	Keyword                *string                                         `queryParam:"style=form,explode=true,name=keyword"`
	Latlong                *string                                         `queryParam:"style=form,explode=true,name=latlong"`
	Locale                 *string                                         `queryParam:"style=form,explode=true,name=locale"`
	MarketID               *string                                         `queryParam:"style=form,explode=true,name=marketId"`
	OnsaleEndDateTime      *string                                         `queryParam:"style=form,explode=true,name=onsaleEndDateTime"`
	OnsaleOnAfterStartDate *string                                         `queryParam:"style=form,explode=true,name=onsaleOnAfterStartDate"`
	OnsaleOnStartDate      *string                                         `queryParam:"style=form,explode=true,name=onsaleOnStartDate"`
	OnsaleStartDateTime    *string                                         `queryParam:"style=form,explode=true,name=onsaleStartDateTime"`
	Page                   *string                                         `queryParam:"style=form,explode=true,name=page"`
	PostalCode             *string                                         `queryParam:"style=form,explode=true,name=postalCode"`
	PromoterID             *string                                         `queryParam:"style=form,explode=true,name=promoterId"`
	Radius                 *string                                         `queryParam:"style=form,explode=true,name=radius"`
	SegmentID              *string                                         `queryParam:"style=form,explode=true,name=segmentId"`
	SegmentName            *string                                         `queryParam:"style=form,explode=true,name=segmentName"`
	Size                   *string                                         `queryParam:"style=form,explode=true,name=size"`
	Sort                   *string                                         `queryParam:"style=form,explode=true,name=sort"`
	Source                 *GetDiscoveryV2EventsSourceEnum                 `queryParam:"style=form,explode=true,name=source"`
	StartDateTime          *string                                         `queryParam:"style=form,explode=true,name=startDateTime"`
	StateCode              *string                                         `queryParam:"style=form,explode=true,name=stateCode"`
	Unit                   *GetDiscoveryV2EventsUnitEnum                   `queryParam:"style=form,explode=true,name=unit"`
	VenueID                *string                                         `queryParam:"style=form,explode=true,name=venueId"`
}

type GetDiscoveryV2EventsRequest struct {
	QueryParams GetDiscoveryV2EventsQueryParams
}

type GetDiscoveryV2EventsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
