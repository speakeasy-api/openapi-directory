// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type APIVersions struct {
	// List of API version and status
	All []APIVersion `json:"all,omitempty"`
	// Lastest API version available
	Latest *int64 `json:"latest,omitempty"`
}
