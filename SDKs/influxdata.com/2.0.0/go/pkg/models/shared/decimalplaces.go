package shared

// DecimalPlaces
// Indicates whether decimal places should be enforced, and how many digits it should show.
type DecimalPlaces struct {
	Digits     *int32 `json:"digits,omitempty"`
	IsEnforced *bool  `json:"isEnforced,omitempty"`
}
