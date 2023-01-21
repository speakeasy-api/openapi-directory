package operations

type GetTaskTypesOfWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTaskTypesOfWorkgroupRequest struct {
	PathParams GetTaskTypesOfWorkgroupPathParams
}

type GetTaskTypesOfWorkgroupResponse struct {
	Body           []byte
	ContentType    string
	HTTPStatusVO   *interface{}
	StatusCode     int64
	TaskTypeListVO *interface{}
}
