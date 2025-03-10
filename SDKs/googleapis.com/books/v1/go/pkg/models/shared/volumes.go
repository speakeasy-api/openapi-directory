// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Volumes - Successful response
type Volumes struct {
	// A list of volumes.
	Items []Volume `json:"items,omitempty"`
	// Resource type.
	Kind *string `json:"kind,omitempty"`
	// Total number of volumes found. This might be greater than the number of volumes returned in this response if results have been paginated.
	TotalItems *int `json:"totalItems,omitempty"`
}
