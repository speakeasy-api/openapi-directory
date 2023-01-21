package shared

// ListLocationsResponse
// Defines the fields that are included in the response body of
// a request to the __ListLocations__ endpoint.
//
// One of `errors` or `locations` is present in a given response (never both).
type ListLocationsResponse struct {
	Errors    []Error    `json:"errors,omitempty"`
	Locations []Location `json:"locations,omitempty"`
}
