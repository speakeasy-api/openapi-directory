// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListLocationsResponse - The response message for Locations.ListLocations.
type ListLocationsResponse struct {
	// A list of locations that matches the specified filter in the request.
	Locations []Location `json:"locations,omitempty"`
	// The standard List next-page token.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
