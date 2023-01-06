package operations

type GetDiscoveryV2ClassificationsIncludeLicensedContentEnum string

const (
	GetDiscoveryV2ClassificationsIncludeLicensedContentEnumYes GetDiscoveryV2ClassificationsIncludeLicensedContentEnum = "yes"
	GetDiscoveryV2ClassificationsIncludeLicensedContentEnumNo  GetDiscoveryV2ClassificationsIncludeLicensedContentEnum = " no"
)

type GetDiscoveryV2ClassificationsIncludeSpellcheckEnum string

const (
	GetDiscoveryV2ClassificationsIncludeSpellcheckEnumYes GetDiscoveryV2ClassificationsIncludeSpellcheckEnum = "yes"
	GetDiscoveryV2ClassificationsIncludeSpellcheckEnumNo  GetDiscoveryV2ClassificationsIncludeSpellcheckEnum = " no"
)

type GetDiscoveryV2ClassificationsIncludeTestEnum string

const (
	GetDiscoveryV2ClassificationsIncludeTestEnumYes  GetDiscoveryV2ClassificationsIncludeTestEnum = "yes"
	GetDiscoveryV2ClassificationsIncludeTestEnumNo   GetDiscoveryV2ClassificationsIncludeTestEnum = " no"
	GetDiscoveryV2ClassificationsIncludeTestEnumOnly GetDiscoveryV2ClassificationsIncludeTestEnum = " only"
)

type GetDiscoveryV2ClassificationsSourceEnum string

const (
	GetDiscoveryV2ClassificationsSourceEnumTicketmaster GetDiscoveryV2ClassificationsSourceEnum = "ticketmaster"
	GetDiscoveryV2ClassificationsSourceEnumUniverse     GetDiscoveryV2ClassificationsSourceEnum = " universe"
	GetDiscoveryV2ClassificationsSourceEnumFrontgate    GetDiscoveryV2ClassificationsSourceEnum = " frontgate"
	GetDiscoveryV2ClassificationsSourceEnumTmr          GetDiscoveryV2ClassificationsSourceEnum = " tmr"
)

type GetDiscoveryV2ClassificationsQueryParams struct {
	ID                     *string                                                  `queryParam:"style=form,explode=true,name=id"`
	IncludeLicensedContent *GetDiscoveryV2ClassificationsIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	IncludeSpellcheck      *GetDiscoveryV2ClassificationsIncludeSpellcheckEnum      `queryParam:"style=form,explode=true,name=includeSpellcheck"`
	IncludeTest            *GetDiscoveryV2ClassificationsIncludeTestEnum            `queryParam:"style=form,explode=true,name=includeTest"`
	Keyword                *string                                                  `queryParam:"style=form,explode=true,name=keyword"`
	Locale                 *string                                                  `queryParam:"style=form,explode=true,name=locale"`
	Page                   *string                                                  `queryParam:"style=form,explode=true,name=page"`
	Size                   *string                                                  `queryParam:"style=form,explode=true,name=size"`
	Sort                   *string                                                  `queryParam:"style=form,explode=true,name=sort"`
	Source                 *GetDiscoveryV2ClassificationsSourceEnum                 `queryParam:"style=form,explode=true,name=source"`
}

type GetDiscoveryV2ClassificationsRequest struct {
	QueryParams GetDiscoveryV2ClassificationsQueryParams
}

type GetDiscoveryV2ClassificationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
