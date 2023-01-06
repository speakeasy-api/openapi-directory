package operations

type GetTargetsAllAverageFixTime200ApplicationJSONResults struct {
	High   *int64 `json:"high,omitempty"`
	Low    *int64 `json:"low,omitempty"`
	Medium *int64 `json:"medium,omitempty"`
}

type GetTargetsAllAverageFixTime200ApplicationJSON struct {
	Results *GetTargetsAllAverageFixTime200ApplicationJSONResults `json:"results,omitempty"`
}

type GetTargetsAllAverageFixTimeResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetTargetsAllAverageFixTime200ApplicationJSONObject *GetTargetsAllAverageFixTime200ApplicationJSON
}
