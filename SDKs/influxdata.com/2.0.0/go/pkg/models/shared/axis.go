package shared

type AxisBaseEnum string

const (
	AxisBaseEnumUnknown AxisBaseEnum = ""
	AxisBaseEnumTwo     AxisBaseEnum = "2"
	AxisBaseEnumTen     AxisBaseEnum = "10"
)

// Axis
// The description of a particular axis for a visualization.
type Axis struct {
	Base   *AxisBaseEnum  `json:"base,omitempty"`
	Bounds []string       `json:"bounds,omitempty"`
	Label  *string        `json:"label,omitempty"`
	Prefix *string        `json:"prefix,omitempty"`
	Scale  *AxisScaleEnum `json:"scale,omitempty"`
	Suffix *string        `json:"suffix,omitempty"`
}
