package operations

type PostEnterpriseAuthRefreshRequestBody struct {
	Token *string `json:"token,omitempty"`
}

type PostEnterpriseAuthRefresh200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostEnterpriseAuthRefresh400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostEnterpriseAuthRefresh500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostEnterpriseAuthRefreshRequest struct {
	Request PostEnterpriseAuthRefreshRequestBody `request:"mediaType=application/json"`
}

type PostEnterpriseAuthRefreshResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	PostEnterpriseAuthRefresh200ApplicationJSONObject *PostEnterpriseAuthRefresh200ApplicationJSON
	PostEnterpriseAuthRefresh400ApplicationJSONObject *PostEnterpriseAuthRefresh400ApplicationJSON
	PostEnterpriseAuthRefresh500ApplicationJSONObject *PostEnterpriseAuthRefresh500ApplicationJSON
}
