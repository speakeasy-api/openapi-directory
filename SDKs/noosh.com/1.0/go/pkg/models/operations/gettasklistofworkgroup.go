package operations

type GetTaskListOfWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTaskListOfWorkgroupRequest struct {
	PathParams GetTaskListOfWorkgroupPathParams
}

type GetTaskListOfWorkgroupResponse struct {
	Body                     []byte
	ContentType              string
	HTTPStatusVO             *interface{}
	StatusCode               int64
	TaskWorkgroupLevelListVO *interface{}
}
