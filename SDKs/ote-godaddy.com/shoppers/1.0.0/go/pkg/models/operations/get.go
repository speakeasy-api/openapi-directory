package operations

type GetPathParams struct {
	ShopperID string `pathParam:"style=simple,explode=false,name=shopperId"`
}

type GetIncludesEnum string

const (
	GetIncludesEnumCustomerID GetIncludesEnum = "customerId"
)

type GetQueryParams struct {
	Includes []GetIncludesEnum `queryParam:"style=form,explode=false,name=includes"`
}

type GetRequest struct {
	PathParams  GetPathParams
	QueryParams GetQueryParams
}

type GetResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	ErrorLimit  *interface{}
	Shopper     *interface{}
	StatusCode  int64
}
