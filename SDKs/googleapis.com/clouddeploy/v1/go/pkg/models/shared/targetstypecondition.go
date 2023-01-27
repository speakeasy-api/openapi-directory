package shared

// TargetsTypeCondition
// TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type.
type TargetsTypeCondition struct {
	ErrorDetails *string `json:"errorDetails,omitempty"`
	Status       *bool   `json:"status,omitempty"`
}
