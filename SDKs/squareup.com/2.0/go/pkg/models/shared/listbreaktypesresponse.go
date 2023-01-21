package shared

// ListBreakTypesResponse
// The response to a request for a set of `BreakType` objects. The response contains
// the requested `BreakType` objects and might contain a set of `Error` objects if
// the request resulted in errors.
type ListBreakTypesResponse struct {
	BreakTypes []BreakType `json:"break_types,omitempty"`
	Cursor     *string     `json:"cursor,omitempty"`
	Errors     []Error     `json:"errors,omitempty"`
}
