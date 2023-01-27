package shared

type WorkflowInvocationStateEnum string

const (
	WorkflowInvocationStateEnumStateUnspecified WorkflowInvocationStateEnum = "STATE_UNSPECIFIED"
	WorkflowInvocationStateEnumRunning          WorkflowInvocationStateEnum = "RUNNING"
	WorkflowInvocationStateEnumSucceeded        WorkflowInvocationStateEnum = "SUCCEEDED"
	WorkflowInvocationStateEnumCancelled        WorkflowInvocationStateEnum = "CANCELLED"
	WorkflowInvocationStateEnumFailed           WorkflowInvocationStateEnum = "FAILED"
	WorkflowInvocationStateEnumCanceling        WorkflowInvocationStateEnum = "CANCELING"
)

// WorkflowInvocation
// Represents a single invocation of a compilation result.
type WorkflowInvocation struct {
	CompilationResult *string                      `json:"compilationResult,omitempty"`
	InvocationConfig  *InvocationConfig            `json:"invocationConfig,omitempty"`
	InvocationTiming  *Interval                    `json:"invocationTiming,omitempty"`
	Name              *string                      `json:"name,omitempty"`
	State             *WorkflowInvocationStateEnum `json:"state,omitempty"`
	WorkflowConfig    *string                      `json:"workflowConfig,omitempty"`
}

// WorkflowInvocationInput
// Represents a single invocation of a compilation result.
type WorkflowInvocationInput struct {
	CompilationResult *string           `json:"compilationResult,omitempty"`
	InvocationConfig  *InvocationConfig `json:"invocationConfig,omitempty"`
	InvocationTiming  *Interval         `json:"invocationTiming,omitempty"`
	WorkflowConfig    *string           `json:"workflowConfig,omitempty"`
}
