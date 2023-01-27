package shared

// MethodSettings
// Describes the generator configuration for a method.
type MethodSettings struct {
	LongRunning *LongRunning `json:"longRunning,omitempty"`
	Selector    *string      `json:"selector,omitempty"`
}
