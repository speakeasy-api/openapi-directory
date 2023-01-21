package operations

type GetContactListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetContactListRequest struct {
	PathParams GetContactListPathParams
}

type GetContactListResponse struct {
	Body           []byte
	ContactsListVO *interface{}
	ContentType    string
	HTTPStatusVO   *interface{}
	StatusCode     int64
}
