package shared

// RetrieveLocationResponse
// Defines the fields that the
// [RetrieveLocation](https://developer.squareup.com/reference/square_2021-08-18/locations-api/retrieve-location) endpoint returns
// in a response.
type RetrieveLocationResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	Location *Location `json:"location,omitempty"`
}
