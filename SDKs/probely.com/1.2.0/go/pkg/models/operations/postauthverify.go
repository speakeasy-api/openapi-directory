package operations

type PostAuthVerifyRequestBody struct {
	Token *string `json:"token,omitempty"`
}

type PostAuthVerify200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostAuthVerify400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostAuthVerify500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostAuthVerifyRequest struct {
	Request PostAuthVerifyRequestBody `request:"mediaType=application/json"`
}

type PostAuthVerifyResponse struct {
	ContentType                            string
	StatusCode                             int64
	PostAuthVerify200ApplicationJSONObject *PostAuthVerify200ApplicationJSON
	PostAuthVerify400ApplicationJSONObject *PostAuthVerify400ApplicationJSON
	PostAuthVerify500ApplicationJSONObject *PostAuthVerify500ApplicationJSON
}
