package operations

type ListSortEnum string

const (
	ListSortEnumCreatedAt         ListSortEnum = "createdAt"
	ListSortEnumMinusCreatedAt    ListSortEnum = "-createdAt"
	ListSortEnumOrderID           ListSortEnum = "orderId"
	ListSortEnumMinusOrderID      ListSortEnum = "-orderId"
	ListSortEnumPricingTotal      ListSortEnum = "pricing.total"
	ListSortEnumMinusPricingTotal ListSortEnum = "-pricing.total"
)

type ListQueryParams struct {
	Domain           *string       `queryParam:"style=form,explode=true,name=domain"`
	Limit            *int64        `queryParam:"style=form,explode=true,name=limit"`
	Offset           *int64        `queryParam:"style=form,explode=true,name=offset"`
	ParentOrderID    *string       `queryParam:"style=form,explode=true,name=parentOrderId"`
	PaymentProfileID *int64        `queryParam:"style=form,explode=true,name=paymentProfileId"`
	PeriodEnd        *string       `queryParam:"style=form,explode=true,name=periodEnd"`
	PeriodStart      *string       `queryParam:"style=form,explode=true,name=periodStart"`
	ProductGroupID   *int64        `queryParam:"style=form,explode=true,name=productGroupId"`
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
	Body        []byte
	ContentType string
	Error       *interface{}
	ErrorLimit  *interface{}
	OrderList   *interface{}
	StatusCode  int64
}
