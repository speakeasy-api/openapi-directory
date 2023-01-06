package operations

type PostEnterpriseAuthVerifyRequestBody struct {
	Token *string `json:"token,omitempty"`
}

type PostEnterpriseAuthVerify200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostEnterpriseAuthVerify400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostEnterpriseAuthVerify500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostEnterpriseAuthVerifyRequest struct {
	Request PostEnterpriseAuthVerifyRequestBody `request:"mediaType=application/json"`
}

type PostEnterpriseAuthVerifyResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	PostEnterpriseAuthVerify200ApplicationJSONObject *PostEnterpriseAuthVerify200ApplicationJSON
	PostEnterpriseAuthVerify400ApplicationJSONObject *PostEnterpriseAuthVerify400ApplicationJSON
	PostEnterpriseAuthVerify500ApplicationJSONObject *PostEnterpriseAuthVerify500ApplicationJSON
}
