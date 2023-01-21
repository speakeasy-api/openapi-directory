package shared

// FilterValue
// A filter to select resources based on an exact field value. For any given
// value, the value can only be in one property. Depending on the field, either
// all properties can be set or only a subset will be available.
//
// Refer to the documentation of the field.
type FilterValue struct {
	All  []string `json:"all,omitempty"`
	Any  []string `json:"any,omitempty"`
	None []string `json:"none,omitempty"`
}
