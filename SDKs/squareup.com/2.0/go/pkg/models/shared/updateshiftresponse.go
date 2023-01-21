package shared

// UpdateShiftResponse
// The response to a request to update a `Shift`. The response contains
// the updated `Shift` object and might contain a set of `Error` objects if
// the request resulted in errors.
type UpdateShiftResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Shift  *Shift  `json:"shift,omitempty"`
}
