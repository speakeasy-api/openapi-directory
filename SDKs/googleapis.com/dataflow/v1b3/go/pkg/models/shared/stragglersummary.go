package shared

// StragglerSummary
// Summarized straggler identification details.
type StragglerSummary struct {
	RecentStragglers    []Straggler       `json:"recentStragglers,omitempty"`
	StragglerCauseCount map[string]string `json:"stragglerCauseCount,omitempty"`
	TotalStragglerCount *string           `json:"totalStragglerCount,omitempty"`
}
