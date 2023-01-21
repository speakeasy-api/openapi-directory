package operations

type GetSupplierWorkgroupDetailPathParams struct {
	BuSupplierWorkgroupID string `pathParam:"style=simple,explode=false,name=bu_supplier_workgroup_id"`
	WorkgroupID           string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetSupplierWorkgroupDetailRequest struct {
	PathParams GetSupplierWorkgroupDetailPathParams
}

type GetSupplierWorkgroupDetailResponse struct {
	Body                      []byte
	ContentType               string
	HTTPStatusVO              *interface{}
	StatusCode                int64
	SupplierWorkgroupExpandVO *interface{}
}
