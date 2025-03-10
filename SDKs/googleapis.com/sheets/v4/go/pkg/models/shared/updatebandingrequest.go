// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// UpdateBandingRequest - Updates properties of the supplied banded range.
type UpdateBandingRequest struct {
	// A banded (alternating colors) range in a sheet.
	BandedRange *BandedRange `json:"bandedRange,omitempty"`
	// The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field.
	Fields *string `json:"fields,omitempty"`
}
