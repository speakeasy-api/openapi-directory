package operations

type ListSortEnum string

const (
	ListSortEnumExpiresAt      ListSortEnum = "expiresAt"
	ListSortEnumMinusExpiresAt ListSortEnum = "-expiresAt"
)

type ListQueryParams struct {
	Includes         []string      `queryParam:"style=form,explode=false,name=includes"`
	Limit            *int64        `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int64        `queryParam:"style=form,explode=true,name=offset"`
	ProductGroupKeys []string      `queryParam:"style=form,explode=false,name=productGroupKeys"`
	Sort             *ListSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type ListHeaders struct {
	XMarketID  *string `header:"style=simple,explode=false,name=X-Market-Id"`
	XShopperID *string `header:"style=simple,explode=false,name=X-Shopper-Id"`
}

type ListRequest struct {
	QueryParams ListQueryParams
	Headers     ListHeaders
}

type ListResponse struct {
	Body             []byte
	ContentType      string
	Error            *interface{}
	ErrorLimit       *interface{}
	StatusCode       int64
	SubscriptionList *interface{}
}
