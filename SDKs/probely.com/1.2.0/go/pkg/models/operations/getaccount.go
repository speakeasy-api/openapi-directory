package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccount401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type GetAccountResponse struct {
	Account                            *shared.Account
	ContentType                        string
	StatusCode                         int64
	GetAccount401ApplicationJSONObject *GetAccount401ApplicationJSON
}
