package operations

type UpdatePathParams struct {
	ShopperID string `pathParam:"style=simple,explode=false,name=shopperId"`
}

type UpdateRequests struct {
	ApplicationXML []byte       `request:"mediaType=application/xml"`
	ShopperUpdate  *interface{} `request:"mediaType=application/json"`
	TextXML        []byte       `request:"mediaType=text/xml"`
}

type UpdateRequest struct {
	PathParams UpdatePathParams
	Request    UpdateRequests
}

type UpdateResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	ErrorLimit  *interface{}
	ShopperID   *interface{}
	StatusCode  int64
}
