package operations

type GetWorkgroupDetailPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetWorkgroupDetailRequest struct {
	PathParams GetWorkgroupDetailPathParams
}

type GetWorkgroupDetailResponse struct {
	Body              []byte
	ContentType       string
	HTTPStatusVO      *interface{}
	StatusCode        int64
	WorkgroupExpandVO *interface{}
}
