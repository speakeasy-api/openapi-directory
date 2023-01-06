package operations

// UpdateCveCheckConfigurationRequestBody
// CVE check config
type UpdateCveCheckConfigurationRequestBody struct {
	APIKey *string `json:"apiKey,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type UpdateCveCheckConfiguration200ApplicationJSONActionEnum string

const (
	UpdateCVECheckConfiguration200ApplicationJSONActionEnumUpdateCveCheckConfiguration UpdateCveCheckConfiguration200ApplicationJSONActionEnum = "updateCVECheckConfiguration"
)

type UpdateCveCheckConfiguration200ApplicationJSONData struct {
	APIKey *string `json:"apiKey,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type UpdateCveCheckConfiguration200ApplicationJSONResultEnum string

const (
	UpdateCVECheckConfiguration200ApplicationJSONResultEnumSuccess UpdateCveCheckConfiguration200ApplicationJSONResultEnum = "success"
	UpdateCVECheckConfiguration200ApplicationJSONResultEnumError   UpdateCveCheckConfiguration200ApplicationJSONResultEnum = "error"
)

type UpdateCveCheckConfiguration200ApplicationJSON struct {
	Action UpdateCveCheckConfiguration200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateCveCheckConfiguration200ApplicationJSONData       `json:"data"`
	Result UpdateCveCheckConfiguration200ApplicationJSONResultEnum `json:"result"`
}

type UpdateCveCheckConfigurationRequest struct {
	Request *UpdateCveCheckConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateCveCheckConfigurationResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	UpdateCVECheckConfiguration200ApplicationJSONObject *UpdateCveCheckConfiguration200ApplicationJSON
}
