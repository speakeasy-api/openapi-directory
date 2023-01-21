package operations

type GetBuyOrderListOfWorkgroupPathParams struct {
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetBuyOrderListOfWorkgroupRequest struct {
	PathParams GetBuyOrderListOfWorkgroupPathParams
}

type GetBuyOrderListOfWorkgroupResponse struct {
	Body                      []byte
	ContentType               string
	HTTPStatusVO              *interface{}
	OrderWorkgroupLevelListVO *interface{}
	StatusCode                int64
}
