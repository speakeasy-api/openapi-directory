package shared

// CreateLocationResponse
// Response object returned by the [CreateLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/create-location) endpoint.
type CreateLocationResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	Location *Location `json:"location,omitempty"`
}
