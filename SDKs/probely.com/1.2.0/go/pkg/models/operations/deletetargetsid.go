package operations

type DeleteTargetsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteTargetsID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteTargetsIDRequest struct {
	PathParams DeleteTargetsIDPathParams
}

type DeleteTargetsIDResponse struct {
	ContentType                             string
	StatusCode                              int64
	DeleteTargetsID401ApplicationJSONObject *DeleteTargetsID401ApplicationJSON
	DeleteTargetsID403ApplicationJSONObject *DeleteTargetsID403ApplicationJSON
	DeleteTargetsID404ApplicationJSONObject *DeleteTargetsID404ApplicationJSON
}
