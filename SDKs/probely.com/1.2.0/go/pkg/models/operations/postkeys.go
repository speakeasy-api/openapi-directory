package operations

import (
	"openapi/pkg/models/shared"
)

type PostKeys401ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostKeys403ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostKeysRequest struct {
	Request shared.APIKeyInput `request:"mediaType=application/json"`
}

type PostKeysResponse struct {
	APIKey                           *shared.APIKey
	ContentType                      string
	StatusCode                       int64
	PostKeys401ApplicationJSONObject *PostKeys401ApplicationJSON
	PostKeys403ApplicationJSONObject *PostKeys403ApplicationJSON
}
