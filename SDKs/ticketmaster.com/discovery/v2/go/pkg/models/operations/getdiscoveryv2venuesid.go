package operations

type GetDiscoveryV2VenuesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDiscoveryV2VenuesIDIncludeLicensedContentEnum string

const (
	GetDiscoveryV2VenuesIDIncludeLicensedContentEnumYes GetDiscoveryV2VenuesIDIncludeLicensedContentEnum = "yes"
	GetDiscoveryV2VenuesIDIncludeLicensedContentEnumNo  GetDiscoveryV2VenuesIDIncludeLicensedContentEnum = " no"
)

type GetDiscoveryV2VenuesIDQueryParams struct {
	IncludeLicensedContent *GetDiscoveryV2VenuesIDIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                                           `queryParam:"style=form,explode=true,name=locale"`
}

type GetDiscoveryV2VenuesIDRequest struct {
	PathParams  GetDiscoveryV2VenuesIDPathParams
	QueryParams GetDiscoveryV2VenuesIDQueryParams
}

type GetDiscoveryV2VenuesIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
