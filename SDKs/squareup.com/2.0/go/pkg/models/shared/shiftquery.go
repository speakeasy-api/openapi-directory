package shared

// ShiftQuery
// The parameters of a `Shift` search query, which includes filter and sort options.
type ShiftQuery struct {
	Filter *ShiftFilter `json:"filter,omitempty"`
	Sort   *ShiftSort   `json:"sort,omitempty"`
}
