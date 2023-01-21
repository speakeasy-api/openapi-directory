package operations

type GetReceivedTimeCardListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetReceivedTimeCardListRequest struct {
	PathParams GetReceivedTimeCardListPathParams
}

type GetReceivedTimeCardListResponse struct {
	Body           []byte
	ContentType    string
	HTTPStatusVO   *interface{}
	StatusCode     int64
	TimeCardListVO *interface{}
}
