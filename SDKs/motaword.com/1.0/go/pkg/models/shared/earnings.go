package shared

type Earnings struct {
	Completed []EarningWithTqs `json:"completed,omitempty"`
	Ongoing   []EarningWithTqs `json:"ongoing,omitempty"`
	Total     *float32         `json:"total,omitempty"`
}
