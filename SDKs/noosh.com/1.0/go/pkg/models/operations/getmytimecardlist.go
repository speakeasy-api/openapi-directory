package operations

type GetMyTimeCardListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetMyTimeCardListRequest struct {
	PathParams GetMyTimeCardListPathParams
}

type GetMyTimeCardListResponse struct {
	Body           []byte
	ContentType    string
	HTTPStatusVO   *interface{}
	StatusCode     int64
	TimeCardListVO *interface{}
}
