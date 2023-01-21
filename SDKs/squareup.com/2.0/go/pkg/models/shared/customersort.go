package shared

// CustomerSort
// Specifies how searched customers profiles are sorted, including the sort key and sort order.
type CustomerSort struct {
	Field *string `json:"field,omitempty"`
	Order *string `json:"order,omitempty"`
}
