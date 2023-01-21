package operations

type GetRfeListPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetRfeListRequest struct {
	PathParams GetRfeListPathParams
}

type GetRfeListResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVO *interface{}
	RfeListVO    *interface{}
	StatusCode   int64
}
