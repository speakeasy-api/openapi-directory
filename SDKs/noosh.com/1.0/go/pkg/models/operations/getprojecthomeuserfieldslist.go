package operations

type GetProjectHomeUserFieldsListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetProjectHomeUserFieldsListRequest struct {
	PathParams GetProjectHomeUserFieldsListPathParams
}

type GetProjectHomeUserFieldsListResponse struct {
	Body                        []byte
	ContentType                 string
	HTTPStatusVO                *interface{}
	ProjectHomeUserFieldsListVO *interface{}
	StatusCode                  int64
}
