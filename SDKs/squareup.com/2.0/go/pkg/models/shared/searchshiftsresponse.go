package shared

// SearchShiftsResponse
// The response to a request for `Shift` objects. The response contains
// the requested `Shift` objects and might contain a set of `Error` objects if
// the request resulted in errors.
type SearchShiftsResponse struct {
	Cursor *string `json:"cursor,omitempty"`
	Errors []Error `json:"errors,omitempty"`
	Shifts []Shift `json:"shifts,omitempty"`
}
