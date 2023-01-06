package operations

type PostEnterpriseAuthRevokeRequestBody struct {
	Token *string `json:"token,omitempty"`
}

type PostEnterpriseAuthRevoke200ApplicationJSON struct {
	Token *string `json:"token,omitempty"`
	TTL   *int64  `json:"ttl,omitempty"`
}

type PostEnterpriseAuthRevoke400ApplicationJSON struct {
	LessThanFieldNameGreaterThan []string `json:"<field name>,omitempty"`
	NonFieldErrors               []string `json:"non_field_errors,omitempty"`
}

type PostEnterpriseAuthRevoke500ApplicationJSON struct {
	Detail *string `json:"detail,omitempty"`
}

type PostEnterpriseAuthRevokeRequest struct {
	Request PostEnterpriseAuthRevokeRequestBody `request:"mediaType=application/json"`
}

type PostEnterpriseAuthRevokeResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	PostEnterpriseAuthRevoke200ApplicationJSONObject *PostEnterpriseAuthRevoke200ApplicationJSON
	PostEnterpriseAuthRevoke400ApplicationJSONObject *PostEnterpriseAuthRevoke400ApplicationJSON
	PostEnterpriseAuthRevoke500ApplicationJSONObject *PostEnterpriseAuthRevoke500ApplicationJSON
}
