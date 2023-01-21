package operations

type GetWgTaskStatusListOfWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetWgTaskStatusListOfWorkgroupRequest struct {
	PathParams GetWgTaskStatusListOfWorkgroupPathParams
}

type GetWgTaskStatusListOfWorkgroupResponse struct {
	Body               []byte
	ContentType        string
	HTTPStatusVO       *interface{}
	StatusCode         int64
	WgTaskStatusListVO *interface{}
}
