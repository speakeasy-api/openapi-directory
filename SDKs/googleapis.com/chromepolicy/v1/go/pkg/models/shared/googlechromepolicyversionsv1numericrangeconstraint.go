package shared

// GoogleChromePolicyVersionsV1NumericRangeConstraint
// A constraint on upper and/or lower bounds, with at least one being set.
type GoogleChromePolicyVersionsV1NumericRangeConstraint struct {
	Maximum *string `json:"maximum,omitempty"`
	Minimum *string `json:"minimum,omitempty"`
}
