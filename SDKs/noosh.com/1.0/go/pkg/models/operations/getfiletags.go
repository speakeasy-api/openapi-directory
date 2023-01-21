package operations

type GetFileTagsPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetFileTagsRequest struct {
	PathParams GetFileTagsPathParams
}

type GetFileTagsResponse struct {
	Body              []byte
	ContentType       string
	FileTagResponseVO *interface{}
	HTTPStatusVO      *interface{}
	StatusCode        int64
}
