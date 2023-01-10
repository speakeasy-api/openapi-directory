package shared

// KeysWithPrivateKey
// The Nexmo product that you access with this application.
type KeysWithPrivateKey struct {
	PrivateKey *string `json:"private_key,omitempty"`
	PublicKey  *string `json:"public_key,omitempty"`
}
