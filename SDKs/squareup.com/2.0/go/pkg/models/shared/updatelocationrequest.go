package shared

// UpdateLocationRequest
// Request object for the [UpdateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/update-location) endpoint.
type UpdateLocationRequest struct {
	Location *Location `json:"location,omitempty"`
}
