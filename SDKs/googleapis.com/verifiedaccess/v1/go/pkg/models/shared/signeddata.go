// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// SignedData - The wrapper message of any data and its signature.
type SignedData struct {
	// The data to be signed.
	Data *string `json:"data,omitempty"`
	// The signature of the data field.
	Signature *string `json:"signature,omitempty"`
}
