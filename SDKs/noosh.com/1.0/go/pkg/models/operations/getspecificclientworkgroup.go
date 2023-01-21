package operations

type GetSpecificClientWorkgroupPathParams struct {
	ClientWorkgroupID string `pathParam:"style=simple,explode=false,name=client_workgroup_id"`
	WorkgroupID       string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSpecificClientWorkgroupRequest struct {
	PathParams GetSpecificClientWorkgroupPathParams
}

type GetSpecificClientWorkgroupResponse struct {
	Body                    []byte
	ClientWorkgroupExpandVO *interface{}
	ContentType             string
	HTTPStatusVO            *interface{}
	StatusCode              int64
}
