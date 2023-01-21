package shared

// ShiftSort
// Sets the sort order of search results.
type ShiftSort struct {
	Field *string `json:"field,omitempty"`
	Order *string `json:"order,omitempty"`
}
