package shared

// UpdateLocationResponse
// Response object returned by the [UpdateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/update-location) endpoint.
type UpdateLocationResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	Location *Location `json:"location,omitempty"`
}
