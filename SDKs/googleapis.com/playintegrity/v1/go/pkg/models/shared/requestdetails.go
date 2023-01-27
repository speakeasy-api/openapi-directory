package shared

// RequestDetails
// Contains the integrity request information.
type RequestDetails struct {
	Nonce              *string `json:"nonce,omitempty"`
	RequestHash        *string `json:"requestHash,omitempty"`
	RequestPackageName *string `json:"requestPackageName,omitempty"`
	TimestampMillis    *string `json:"timestampMillis,omitempty"`
}
