package shared

// UpdateBreakTypeResponse
// A response to a request to update a `BreakType`. The response contains
// the requested `BreakType` objects and might contain a set of `Error` objects if
// the request resulted in errors.
type UpdateBreakTypeResponse struct {
	BreakType *BreakType `json:"break_type,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
}
