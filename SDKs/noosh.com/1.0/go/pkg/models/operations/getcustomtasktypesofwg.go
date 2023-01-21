package operations

type GetCustomTaskTypesOfWgPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetCustomTaskTypesOfWgRequest struct {
	PathParams GetCustomTaskTypesOfWgPathParams
}

type GetCustomTaskTypesOfWgResponse struct {
	Body           []byte
	ContentType    string
	HTTPStatusVO   *interface{}
	StatusCode     int64
	TaskTypeListVO *interface{}
}
