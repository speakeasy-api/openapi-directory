package operations

type GetQuoteStateListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetQuoteStateListRequest struct {
	PathParams GetQuoteStateListPathParams
}

type GetQuoteStateListResponse struct {
	Body              []byte
	ContentType       string
	HTTPStatusVO      *interface{}
	ObjectStateListVO *interface{}
	StatusCode        int64
}
