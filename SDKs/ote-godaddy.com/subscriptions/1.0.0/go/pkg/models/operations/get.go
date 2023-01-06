package operations

type GetPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetHeaders struct {
	XMarketID  *string `header:"style=simple,explode=false,name=X-Market-Id"`
	XShopperID *string `header:"style=simple,explode=false,name=X-Shopper-Id"`
}

type GetRequest struct {
	PathParams GetPathParams
	Headers    GetHeaders
}

type GetResponse struct {
	Body         []byte
	ContentType  string
	Error        *interface{}
	ErrorLimit   *interface{}
	StatusCode   int64
	Subscription *interface{}
}
