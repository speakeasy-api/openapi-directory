package operations

type GetTaskOfProjectPathParams struct {
	ProjectID   string `pathParam:"style=simple,explode=false,name=project_id"`
	TaskID      string `pathParam:"style=simple,explode=false,name=task_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetTaskOfProjectRequest struct {
	PathParams GetTaskOfProjectPathParams
}

type GetTaskOfProjectResponse struct {
	Body         []byte
	ContentType  string
	HTTPStatusVO *interface{}
	StatusCode   int64
	TaskExpandVO *interface{}
}
