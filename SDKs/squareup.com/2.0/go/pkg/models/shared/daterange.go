package shared

// DateRange
// A range defined by two dates. Used for filtering a query for Connect v2
// objects that have date properties.
type DateRange struct {
	EndDate   *string `json:"end_date,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}
