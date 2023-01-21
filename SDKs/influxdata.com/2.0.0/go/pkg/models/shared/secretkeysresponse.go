package shared

type SecretKeysResponseLinks struct {
	Org  *string `json:"org,omitempty"`
	Self *string `json:"self,omitempty"`
}

type SecretKeysResponse struct {
	Links   *SecretKeysResponseLinks `json:"links,omitempty"`
	Secrets []string                 `json:"secrets,omitempty"`
}
