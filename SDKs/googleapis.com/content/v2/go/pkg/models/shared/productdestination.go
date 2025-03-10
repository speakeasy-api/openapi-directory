// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ProductDestination struct {
	// The name of the destination.
	DestinationName *string `json:"destinationName,omitempty"`
	// Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`"
	Intention *string `json:"intention,omitempty"`
}
