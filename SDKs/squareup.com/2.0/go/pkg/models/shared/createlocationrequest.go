package shared

// CreateLocationRequest
// Request object for the [CreateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/create-location) endpoint.
type CreateLocationRequest struct {
	Location *Location `json:"location,omitempty"`
}
