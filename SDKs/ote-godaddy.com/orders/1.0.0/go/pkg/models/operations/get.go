package operations

type GetPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
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
	Body        []byte
	ContentType string
	Error       *interface{}
	ErrorLimit  *interface{}
	Order       *interface{}
	StatusCode  int64
}
