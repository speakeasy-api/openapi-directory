package operations

type DeleteUsersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteUsersID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteUsersID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteUsersID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type DeleteUsersIDRequest struct {
	PathParams DeleteUsersIDPathParams
}

type DeleteUsersIDResponse struct {
	ContentType                           string
	StatusCode                            int64
	DeleteUsersID401ApplicationJSONObject *DeleteUsersID401ApplicationJSON
	DeleteUsersID403ApplicationJSONObject *DeleteUsersID403ApplicationJSON
	DeleteUsersID404ApplicationJSONObject *DeleteUsersID404ApplicationJSON
}
