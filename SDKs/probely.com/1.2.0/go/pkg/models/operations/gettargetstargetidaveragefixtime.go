package operations

type GetTargetsTargetIDAverageFixTimePathParams struct {
	TargetID string `pathParam:"style=simple,explode=false,name=target_id"`
}

type GetTargetsTargetIDAverageFixTime200ApplicationJSONResults struct {
	High   *int64 `json:"high,omitempty"`
	Low    *int64 `json:"low,omitempty"`
	Medium *int64 `json:"medium,omitempty"`
}

type GetTargetsTargetIDAverageFixTime200ApplicationJSON struct {
	Results *GetTargetsTargetIDAverageFixTime200ApplicationJSONResults `json:"results,omitempty"`
}

type GetTargetsTargetIDAverageFixTimeRequest struct {
	PathParams GetTargetsTargetIDAverageFixTimePathParams
}

type GetTargetsTargetIDAverageFixTimeResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	GetTargetsTargetIDAverageFixTime200ApplicationJSONObject *GetTargetsTargetIDAverageFixTime200ApplicationJSON
}
