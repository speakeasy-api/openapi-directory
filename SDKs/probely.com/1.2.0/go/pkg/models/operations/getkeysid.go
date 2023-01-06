package operations

import (
	"openapi/pkg/models/shared"
)

type GetKeysIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetKeysID401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetKeysID403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetKeysIDRequest struct {
	PathParams GetKeysIDPathParams
}

type GetKeysIDResponse struct {
	APIKey                            *shared.APIKey
	ContentType                       string
	StatusCode                        int64
	GetKeysID401ApplicationJSONObject *GetKeysID401ApplicationJSON
	GetKeysID403ApplicationJSONObject *GetKeysID403ApplicationJSON
}
