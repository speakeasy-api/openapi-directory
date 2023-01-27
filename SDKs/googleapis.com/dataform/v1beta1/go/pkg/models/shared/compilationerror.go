package shared

// CompilationError
// An error encountered when attempting to compile a Dataform project.
type CompilationError struct {
	ActionTarget *Target `json:"actionTarget,omitempty"`
	Message      *string `json:"message,omitempty"`
	Path         *string `json:"path,omitempty"`
	Stack        *string `json:"stack,omitempty"`
}
