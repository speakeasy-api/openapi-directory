package operations

type CancelPathParams struct {
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type CancelHeaders struct {
	XShopperID *string `header:"style=simple,explode=false,name=X-Shopper-Id"`
}

type CancelRequest struct {
	PathParams CancelPathParams
	Headers    CancelHeaders
}

type CancelResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	ErrorLimit  *interface{}
	StatusCode  int64
}
