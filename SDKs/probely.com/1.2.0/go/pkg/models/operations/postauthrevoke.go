package operations

type PostAuthRevokeRequestBody struct {
	Token *string `json:"token,omitempty"`
}

type PostAuthRevoke200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostAuthRevoke400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostAuthRevoke500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostAuthRevokeRequest struct {
	Request PostAuthRevokeRequestBody `request:"mediaType=application/json"`
}

type PostAuthRevokeResponse struct {
	ContentType                            string
	StatusCode                             int64
	PostAuthRevoke200ApplicationJSONObject *PostAuthRevoke200ApplicationJSON
	PostAuthRevoke400ApplicationJSONObject *PostAuthRevoke400ApplicationJSON
	PostAuthRevoke500ApplicationJSONObject *PostAuthRevoke500ApplicationJSON
}
