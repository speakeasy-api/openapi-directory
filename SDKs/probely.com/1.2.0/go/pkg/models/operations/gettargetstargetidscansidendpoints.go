package operations

type GetTargetsTargetIDScansIDEndpointsPathParams struct {
	ID       string `pathParam:"style=simple,explode=false,name=id"`
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDScansIDEndpoints401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDEndpoints404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetTargetsTargetIDScansIDEndpointsRequest struct {
	PathParams GetTargetsTargetIDScansIDEndpointsPathParams
}

type GetTargetsTargetIDScansIDEndpointsResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	GetTargetsTargetIDScansIDEndpoints200ApplicationCsvBinaryString []byte
	GetTargetsTargetIDScansIDEndpoints401ApplicationJSONObject      *GetTargetsTargetIDScansIDEndpoints401ApplicationJSON
	GetTargetsTargetIDScansIDEndpoints404ApplicationJSONObject      *GetTargetsTargetIDScansIDEndpoints404ApplicationJSON
}
