package operations

import (
	"openapi/pkg/models/shared"
)

type CheckCve200ApplicationJSONActionEnum string

const (
	CheckCVE200ApplicationJSONActionEnumCheckCve CheckCve200ApplicationJSONActionEnum = "checkCVE"
)

type CheckCve200ApplicationJSONData struct {
	CveChecks []shared.CveCheck `json:"cveChecks"`
}

type CheckCve200ApplicationJSONResultEnum string

const (
	CheckCVE200ApplicationJSONResultEnumSuccess CheckCve200ApplicationJSONResultEnum = "success"
	CheckCVE200ApplicationJSONResultEnumError   CheckCve200ApplicationJSONResultEnum = "error"
)

type CheckCve200ApplicationJSON struct {
	Action CheckCve200ApplicationJSONActionEnum `json:"action"`
	Data   CheckCve200ApplicationJSONData       `json:"data"`
	Result CheckCve200ApplicationJSONResultEnum `json:"result"`
}

type CheckCveResponse struct {
	ContentType                      string
	StatusCode                       int64
	CheckCVE200ApplicationJSONObject *CheckCve200ApplicationJSON
}
