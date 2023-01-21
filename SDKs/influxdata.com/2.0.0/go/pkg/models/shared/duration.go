package shared

// Duration
// A pair consisting of length of time and the unit of time measured. It is the atomic unit from which all duration literals are composed.
type Duration struct {
	Magnitude *int64  `json:"magnitude,omitempty"`
	Type      *string `json:"type,omitempty"`
	Unit      *string `json:"unit,omitempty"`
}
