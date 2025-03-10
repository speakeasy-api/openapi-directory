// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// IdpCredential - Credential for verifying signatures produced by the Identity Provider.
type IdpCredential struct {
	// Information of a DSA public key.
	DsaKeyInfo *DsaPublicKeyInfo `json:"dsaKeyInfo,omitempty"`
	// Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential.
	Name *string `json:"name,omitempty"`
	// Information of a RSA public key.
	RsaKeyInfo *RsaPublicKeyInfo `json:"rsaKeyInfo,omitempty"`
	// Output only. Time when the `IdpCredential` was last updated.
	UpdateTime *string `json:"updateTime,omitempty"`
}
