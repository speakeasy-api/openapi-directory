package shared

// CustomerQuery
// Represents a query (including filtering criteria, sorting criteria, or both) used to search
// for customer profiles.
type CustomerQuery struct {
	Filter *CustomerFilter `json:"filter,omitempty"`
	Sort   *CustomerSort   `json:"sort,omitempty"`
}
