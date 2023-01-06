package operations

type DeleteKeysIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteKeysID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteKeysID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteKeysIDRequest struct {
	PathParams DeleteKeysIDPathParams
}

type DeleteKeysIDResponse struct {
	ContentType                          string
	StatusCode                           int64
	DeleteKeysID401ApplicationJSONObject *DeleteKeysID401ApplicationJSON
	DeleteKeysID403ApplicationJSONObject *DeleteKeysID403ApplicationJSON
}
