package shared

// DeleteShiftResponse
// The response to a request to delete a `Shift`. The response might contain a set of
// `Error` objects if the request resulted in errors.
type DeleteShiftResponse struct {
	Errors []Error `json:"errors,omitempty"`
}
