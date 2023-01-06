package shared

// InstrumentsListResult
// Image search results
type InstrumentsListResult struct {
	Data    []Instrument `json:"data,omitempty"`
	Page    *int64       `json:"page,omitempty"`
	PerPage *int64       `json:"per_page,omitempty"`
}
