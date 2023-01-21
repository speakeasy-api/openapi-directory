package operations

type GetClientWorkgroupListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetClientWorkgroupListRequest struct {
	PathParams GetClientWorkgroupListPathParams
}

type GetClientWorkgroupListResponse struct {
	Body                  []byte
	ClientWorkgroupListVO *interface{}
	ContentType           string
	HTTPStatusVO          *interface{}
	StatusCode            int64
}
