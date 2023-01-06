package operations

import (
	"openapi/pkg/models/shared"
)

type PostAuthObtain200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostAuthObtain400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostAuthObtain500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostAuthObtainRequest struct {
	Request shared.Login `request:"mediaType=application/json"`
}

type PostAuthObtainResponse struct {
	ContentType                            string
	StatusCode                             int64
	PostAuthObtain200ApplicationJSONObject *PostAuthObtain200ApplicationJSON
	PostAuthObtain400ApplicationJSONObject *PostAuthObtain400ApplicationJSON
	PostAuthObtain500ApplicationJSONObject *PostAuthObtain500ApplicationJSON
}
