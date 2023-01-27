package shared

// SamlParams
// Message storing SAML params to enable Google as IDP.
type SamlParams struct {
	Certificate *string `json:"certificate,omitempty"`
	EntityID    *string `json:"entityId,omitempty"`
	SsoURI      *string `json:"ssoUri,omitempty"`
	UserEmail   *string `json:"userEmail,omitempty"`
}
