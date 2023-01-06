package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetUsersID404ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetUsersIDRequest struct {
	PathParams GetUsersIDPathParams
}

type GetUsersIDResponse struct {
	ContentType                        string
	StatusCode                         int64
	User                               *shared.User
	GetUsersID401ApplicationJSONObject *GetUsersID401ApplicationJSON
	GetUsersID404ApplicationJSONObject *GetUsersID404ApplicationJSON
}
