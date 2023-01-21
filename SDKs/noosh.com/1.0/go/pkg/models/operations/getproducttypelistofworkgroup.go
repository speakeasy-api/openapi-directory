package operations

type GetProductTypeListOfWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetProductTypeListOfWorkgroupRequest struct {
	PathParams GetProductTypeListOfWorkgroupPathParams
}

type GetProductTypeListOfWorkgroupResponse struct {
	Body                     []byte
	ContentType              string
	HTTPStatusVO             *interface{}
	StatusCode               int64
	WorkgroupAttributeListVO *interface{}
}
