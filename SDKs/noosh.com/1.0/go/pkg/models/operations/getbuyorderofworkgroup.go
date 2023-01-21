package operations

type GetBuyOrderOfWorkgroupPathParams struct {
	OrderID     string `pathParam:"style=simple,explode=false,name=order_id"`
	WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
}

type GetBuyOrderOfWorkgroupRequest struct {
	PathParams GetBuyOrderOfWorkgroupPathParams
}

type GetBuyOrderOfWorkgroupResponse struct {
	Body                        []byte
	ContentType                 string
	HTTPStatusVO                *interface{}
	OrderExpandWorkgroupLevelVO *interface{}
	StatusCode                  int64
}
