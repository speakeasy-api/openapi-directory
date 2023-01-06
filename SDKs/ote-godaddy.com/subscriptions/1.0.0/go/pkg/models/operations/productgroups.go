package operations

type ProductGroupsHeaders struct {
	XMarketID  *string `header:"style=simple,explode=false,name=X-Market-Id"`
	XShopperID *string `header:"style=simple,explode=false,name=X-Shopper-Id"`
}

type ProductGroupsRequest struct {
	Headers ProductGroupsHeaders
}

type ProductGroupsResponse struct {
	Body          []byte
	ContentType   string
	Error         *interface{}
	ErrorLimit    *interface{}
	ProductGroups []interface{}
	StatusCode    int64
}
