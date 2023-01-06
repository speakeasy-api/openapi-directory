package operations

type GetDiscoveryV2EventsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDiscoveryV2EventsIDIncludeLicensedContentEnum string

const (
	GetDiscoveryV2EventsIDIncludeLicensedContentEnumYes GetDiscoveryV2EventsIDIncludeLicensedContentEnum = "yes"
	GetDiscoveryV2EventsIDIncludeLicensedContentEnumNo  GetDiscoveryV2EventsIDIncludeLicensedContentEnum = " no"
)

type GetDiscoveryV2EventsIDQueryParams struct {
	IncludeLicensedContent *GetDiscoveryV2EventsIDIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                                           `queryParam:"style=form,explode=true,name=locale"`
}

type GetDiscoveryV2EventsIDRequest struct {
	PathParams  GetDiscoveryV2EventsIDPathParams
	QueryParams GetDiscoveryV2EventsIDQueryParams
}

type GetDiscoveryV2EventsIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
