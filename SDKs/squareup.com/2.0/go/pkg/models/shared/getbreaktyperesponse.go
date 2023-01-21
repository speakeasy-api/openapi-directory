package shared

// GetBreakTypeResponse
// The response to a request to get a `BreakType`. The response contains
// the requested `BreakType` objects and might contain a set of `Error` objects if
// the request resulted in errors.
type GetBreakTypeResponse struct {
	BreakType *BreakType `json:"break_type,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
}
