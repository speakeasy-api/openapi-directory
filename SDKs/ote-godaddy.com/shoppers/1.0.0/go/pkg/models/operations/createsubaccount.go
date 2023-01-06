package operations

type CreateSubaccountRequests struct {
	ApplicationXML   []byte       `request:"mediaType=application/xml"`
	SubaccountCreate *interface{} `request:"mediaType=application/json"`
	TextXML          []byte       `request:"mediaType=text/xml"`
}

type CreateSubaccountRequest struct {
	Request CreateSubaccountRequests
}

type CreateSubaccountResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	ErrorLimit  *interface{}
	ShopperID   *interface{}
	StatusCode  int64
}
