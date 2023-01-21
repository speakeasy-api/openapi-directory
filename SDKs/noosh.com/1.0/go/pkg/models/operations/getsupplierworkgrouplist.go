package operations

type GetSupplierWorkgroupListPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSupplierWorkgroupListRequest struct {
	PathParams GetSupplierWorkgroupListPathParams
}

type GetSupplierWorkgroupListResponse struct {
	Body                    []byte
	ContentType             string
	HTTPStatusVO            *interface{}
	StatusCode              int64
	SupplierWorkgroupListVO *interface{}
}
