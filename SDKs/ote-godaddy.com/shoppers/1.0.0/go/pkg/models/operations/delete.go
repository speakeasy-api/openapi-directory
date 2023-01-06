package operations

type DeletePathParams struct {
	ShopperID string `pathParam:"style=simple,explode=false,name=shopperId"`
}

type DeleteQueryParams struct {
	AuditClientIP string `queryParam:"style=form,explode=true,name=auditClientIp"`
}

type DeleteRequest struct {
	PathParams  DeletePathParams
	QueryParams DeleteQueryParams
}

type DeleteResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	ErrorLimit  *interface{}
	StatusCode  int64
}
