package operations

import (
	"openapi/pkg/models/shared"
)

type GetLastCveCheck200ApplicationJSONActionEnum string

const (
	GetLastCVECheck200ApplicationJSONActionEnumGetLastCveCheck GetLastCveCheck200ApplicationJSONActionEnum = "getLastCVECheck"
)

type GetLastCveCheck200ApplicationJSONData struct {
	CVEChecks []shared.CveCheck `json:"CVEChecks"`
}

type GetLastCveCheck200ApplicationJSONResultEnum string

const (
	GetLastCVECheck200ApplicationJSONResultEnumSuccess GetLastCveCheck200ApplicationJSONResultEnum = "success"
	GetLastCVECheck200ApplicationJSONResultEnumError   GetLastCveCheck200ApplicationJSONResultEnum = "error"
)

type GetLastCveCheck200ApplicationJSON struct {
	Action GetLastCveCheck200ApplicationJSONActionEnum `json:"action"`
	Data   GetLastCveCheck200ApplicationJSONData       `json:"data"`
	Result GetLastCveCheck200ApplicationJSONResultEnum `json:"result"`
}

type GetLastCveCheckResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetLastCVECheck200ApplicationJSONObject *GetLastCveCheck200ApplicationJSON
}
