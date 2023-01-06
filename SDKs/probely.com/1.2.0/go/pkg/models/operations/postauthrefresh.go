package operations

type PostAuthRefreshRequestBody struct {
	Token *string `json:"token,omitempty"`
}

type PostAuthRefresh200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostAuthRefresh400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostAuthRefresh500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostAuthRefreshRequest struct {
	Request PostAuthRefreshRequestBody `request:"mediaType=application/json"`
}

type PostAuthRefreshResponse struct {
	ContentType                             string
	StatusCode                              int64
	PostAuthRefresh200ApplicationJSONObject *PostAuthRefresh200ApplicationJSON
	PostAuthRefresh400ApplicationJSONObject *PostAuthRefresh400ApplicationJSON
	PostAuthRefresh500ApplicationJSONObject *PostAuthRefresh500ApplicationJSON
}
