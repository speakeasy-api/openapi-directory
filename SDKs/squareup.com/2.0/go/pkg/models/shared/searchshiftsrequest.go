package shared

// SearchShiftsRequest
// A request for a filtered and sorted set of `Shift` objects.
type SearchShiftsRequest struct {
	Cursor *string     `json:"cursor,omitempty"`
	Limit  *int64      `json:"limit,omitempty"`
	Query  *ShiftQuery `json:"query,omitempty"`
}
