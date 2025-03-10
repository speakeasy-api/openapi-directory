// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Error400NGPIS - NextGen specific definition of reporting error information in case of a HTTP error code 400.
type Error400NGPIS struct {
	// A _link object with all availabel link types.
	//
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage400PIS  `json:"tppMessages,omitempty"`
}
