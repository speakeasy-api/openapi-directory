package operations

// UpdateCveRequestBody
// CVE update config
type UpdateCveRequestBody struct {
	URL   *string  `json:"url,omitempty"`
	Years []string `json:"years,omitempty"`
}

type UpdateCve200ApplicationJSONActionEnum string

const (
	UpdateCVE200ApplicationJSONActionEnumUpdateCve UpdateCve200ApplicationJSONActionEnum = "updateCVE"
)

type UpdateCve200ApplicationJSONData struct {
	CVEs int64 `json:"CVEs"`
}

type UpdateCve200ApplicationJSONResultEnum string

const (
	UpdateCVE200ApplicationJSONResultEnumSuccess UpdateCve200ApplicationJSONResultEnum = "success"
	UpdateCVE200ApplicationJSONResultEnumError   UpdateCve200ApplicationJSONResultEnum = "error"
)

type UpdateCve200ApplicationJSON struct {
	Action UpdateCve200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateCve200ApplicationJSONData       `json:"data"`
	Result UpdateCve200ApplicationJSONResultEnum `json:"result"`
}

type UpdateCveRequest struct {
	Request *UpdateCveRequestBody `request:"mediaType=application/json"`
}

type UpdateCveResponse struct {
	ContentType                       string
	StatusCode                        int64
	UpdateCVE200ApplicationJSONObject *UpdateCve200ApplicationJSON
}
