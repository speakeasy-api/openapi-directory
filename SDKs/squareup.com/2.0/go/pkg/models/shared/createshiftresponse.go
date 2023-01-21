package shared

// CreateShiftResponse
// The response to a request to create a `Shift`. The response contains
// the created `Shift` object and might contain a set of `Error` objects if
// the request resulted in errors.
type CreateShiftResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Shift  *Shift  `json:"shift,omitempty"`
}
