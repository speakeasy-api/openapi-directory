package operations

type GetCveCheckConfiguration200ApplicationJSONActionEnum string

const (
	GetCVECheckConfiguration200ApplicationJSONActionEnumGetCveCheckConfiguration GetCveCheckConfiguration200ApplicationJSONActionEnum = "getCVECheckConfiguration"
)

type GetCveCheckConfiguration200ApplicationJSONData struct {
	APIKey *string `json:"apiKey,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type GetCveCheckConfiguration200ApplicationJSONResultEnum string

const (
	GetCVECheckConfiguration200ApplicationJSONResultEnumSuccess GetCveCheckConfiguration200ApplicationJSONResultEnum = "success"
	GetCVECheckConfiguration200ApplicationJSONResultEnumError   GetCveCheckConfiguration200ApplicationJSONResultEnum = "error"
)

type GetCveCheckConfiguration200ApplicationJSON struct {
	Action GetCveCheckConfiguration200ApplicationJSONActionEnum `json:"action"`
	Data   GetCveCheckConfiguration200ApplicationJSONData       `json:"data"`
	Result GetCveCheckConfiguration200ApplicationJSONResultEnum `json:"result"`
}

type GetCveCheckConfigurationResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetCVECheckConfiguration200ApplicationJSONObject *GetCveCheckConfiguration200ApplicationJSON
}
