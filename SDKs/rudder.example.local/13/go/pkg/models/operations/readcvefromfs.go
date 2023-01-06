package operations

type ReadCvEfromFs200ApplicationJSONActionEnum string

const (
	ReadCVEfromFS200ApplicationJSONActionEnumReadCvEfromFs ReadCvEfromFs200ApplicationJSONActionEnum = "readCVEfromFS"
)

type ReadCvEfromFs200ApplicationJSONData struct {
	CVEs int64 `json:"CVEs"`
}

type ReadCvEfromFs200ApplicationJSONResultEnum string

const (
	ReadCVEfromFS200ApplicationJSONResultEnumSuccess ReadCvEfromFs200ApplicationJSONResultEnum = "success"
	ReadCVEfromFS200ApplicationJSONResultEnumError   ReadCvEfromFs200ApplicationJSONResultEnum = "error"
)

type ReadCvEfromFs200ApplicationJSON struct {
	Action ReadCvEfromFs200ApplicationJSONActionEnum `json:"action"`
	Data   ReadCvEfromFs200ApplicationJSONData       `json:"data"`
	Result ReadCvEfromFs200ApplicationJSONResultEnum `json:"result"`
}

type ReadCvEfromFsResponse struct {
	ContentType                           string
	StatusCode                            int64
	ReadCVEfromFS200ApplicationJSONObject *ReadCvEfromFs200ApplicationJSON
}
