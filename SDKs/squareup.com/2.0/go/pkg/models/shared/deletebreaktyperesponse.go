package shared

// DeleteBreakTypeResponse
// The response to a request to delete a `BreakType`. The response might contain a set
// of `Error` objects if the request resulted in errors.
type DeleteBreakTypeResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
