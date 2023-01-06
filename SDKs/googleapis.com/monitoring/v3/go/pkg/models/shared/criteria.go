package shared

// Criteria
// Criteria specific to the AlertPolicys that this Snooze applies to. The Snooze will suppress alerts that come from one of the AlertPolicys whose names are supplied.
type Criteria struct {
	Policies []string `json:"policies,omitempty"`
}
