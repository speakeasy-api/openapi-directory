package operations

import (
	"openapi/pkg/models/shared"
)

type PostEnterpriseAuthObtain200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostEnterpriseAuthObtain400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostEnterpriseAuthObtain500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostEnterpriseAuthObtainRequest struct {
	Request shared.Login `request:"mediaType=application/json"`
}

type PostEnterpriseAuthObtainResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	PostEnterpriseAuthObtain200ApplicationJSONObject *PostEnterpriseAuthObtain200ApplicationJSON
	PostEnterpriseAuthObtain400ApplicationJSONObject *PostEnterpriseAuthObtain400ApplicationJSON
	PostEnterpriseAuthObtain500ApplicationJSONObject *PostEnterpriseAuthObtain500ApplicationJSON
}
