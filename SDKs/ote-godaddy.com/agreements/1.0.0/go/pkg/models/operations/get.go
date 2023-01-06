package operations

type GetQueryParams struct {
	Keys []string `queryParam:"style=form,explode=false,name=keys"`
}

type GetHeaders struct {
	XMarketID       *string `header:"style=simple,explode=false,name=X-Market-Id"`
	XPrivateLabelID *int64  `header:"style=simple,explode=false,name=X-Private-Label-Id"`
}

type GetRequest struct {
	QueryParams GetQueryParams
	Headers     GetHeaders
}

type GetResponse struct {
	Body            []byte
	ContentType     string
	Error           *interface{}
	ErrorLimit      *interface{}
	LegalAgreements []interface{}
	StatusCode      int64
}
