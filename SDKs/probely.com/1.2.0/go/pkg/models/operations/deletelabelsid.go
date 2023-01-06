package operations

type DeleteLabelsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteLabelsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteLabelsIDRequest struct {
	PathParams DeleteLabelsIDPathParams
}

type DeleteLabelsIDResponse struct {
	ContentType                            string
	StatusCode                             int64
	DeleteLabelsID401ApplicationJSONObject *DeleteLabelsID401ApplicationJSON
}
