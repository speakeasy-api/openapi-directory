package shared

// CreateBreakTypeResponse
// The response to the request to create a `BreakType`. The response contains
// the created `BreakType` object and might contain a set of `Error` objects if
// the request resulted in errors.
type CreateBreakTypeResponse struct {
	BreakType *BreakType `json:"break_type,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
}
