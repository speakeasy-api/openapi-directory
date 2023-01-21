package operations

type GetWorkgroupMemberInfoPathParams struct {
	UserID      string `pathParam:"style=simple,explode=false,name=user_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetWorkgroupMemberInfoRequest struct {
	PathParams GetWorkgroupMemberInfoPathParams
}

type GetWorkgroupMemberInfoResponse struct {
	Body                []byte
	ContentType         string
	HTTPStatusVO        *interface{}
	StatusCode          int64
	UserDetailsExpandVO *interface{}
}
