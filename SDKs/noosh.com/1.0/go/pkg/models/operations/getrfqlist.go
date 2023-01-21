package operations

type GetRfqListPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetRfqListRequest struct {
	PathParams GetRfqListPathParams
}

type GetRfqListResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVO *interface{}
	RfqListVO    *interface{}
	StatusCode   int64
}
