package shared

// GetShiftResponse
// A response to a request to get a `Shift`. The response contains
// the requested `Shift` object and might contain a set of `Error` objects if
// the request resulted in errors.
type GetShiftResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Shift  *Shift  `json:"shift,omitempty"`
}
