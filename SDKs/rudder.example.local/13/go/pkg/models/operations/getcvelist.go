package operations

import (
	"openapi/pkg/models/shared"
)

// GetCveListRequestBody
// cveList
type GetCveListRequestBody struct {
	CveIds []string `json:"cveIds,omitempty"`
}

type GetCveList200ApplicationJSONActionEnum string

const (
	GetCVEList200ApplicationJSONActionEnumGetCveList GetCveList200ApplicationJSONActionEnum = "getCVEList"
)

type GetCveList200ApplicationJSONData struct {
	CVEs []shared.CveDetails `json:"CVEs"`
}

type GetCveList200ApplicationJSONResultEnum string

const (
	GetCVEList200ApplicationJSONResultEnumSuccess GetCveList200ApplicationJSONResultEnum = "success"
	GetCVEList200ApplicationJSONResultEnumError   GetCveList200ApplicationJSONResultEnum = "error"
)

type GetCveList200ApplicationJSON struct {
	Action GetCveList200ApplicationJSONActionEnum `json:"action"`
	Data   GetCveList200ApplicationJSONData       `json:"data"`
	Result GetCveList200ApplicationJSONResultEnum `json:"result"`
}

type GetCveListRequest struct {
	Request *GetCveListRequestBody `request:"mediaType=application/json"`
}

type GetCveListResponse struct {
	ContentType                        string
	StatusCode                         int64
	GetCVEList200ApplicationJSONObject *GetCveList200ApplicationJSON
}
