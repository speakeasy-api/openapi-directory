package operations

type GetDiscoveryV2ClassificationsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnum string

const (
	GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnumYes GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnum = "yes"
	GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnumNo  GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnum = " no"
)

type GetDiscoveryV2ClassificationsIDQueryParams struct {
	IncludeLicensedContent *GetDiscoveryV2ClassificationsIDIncludeLicensedContentEnum `queryParam:"style=form,explode=true,name=includeLicensedContent"`
	Locale                 *string                                                    `queryParam:"style=form,explode=true,name=locale"`
}

type GetDiscoveryV2ClassificationsIDRequest struct {
	PathParams  GetDiscoveryV2ClassificationsIDPathParams
	QueryParams GetDiscoveryV2ClassificationsIDQueryParams
}

type GetDiscoveryV2ClassificationsIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
