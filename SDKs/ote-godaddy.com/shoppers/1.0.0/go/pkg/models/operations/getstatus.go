package operations

type GetStatusPathParams struct {
	ShopperID string `pathParam:"style=simple,explode=false,name=shopperId"`
}

type GetStatusQueryParams struct {
	AuditClientIP string `queryParam:"style=form,explode=true,name=auditClientIp"`
}

type GetStatusRequest struct {
	PathParams  GetStatusPathParams
	QueryParams GetStatusQueryParams
}

type GetStatusResponse struct {
	Body          []byte
	ContentType   string
	Error         *interface{}
	ErrorLimit    *interface{}
	ShopperStatus *interface{}
	StatusCode    int64
}
