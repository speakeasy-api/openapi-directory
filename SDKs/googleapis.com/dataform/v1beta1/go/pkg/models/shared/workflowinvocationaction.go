package shared

type WorkflowInvocationActionStateEnum string

const (
	WorkflowInvocationActionStateEnumPending   WorkflowInvocationActionStateEnum = "PENDING"
	WorkflowInvocationActionStateEnumRunning   WorkflowInvocationActionStateEnum = "RUNNING"
	WorkflowInvocationActionStateEnumSkipped   WorkflowInvocationActionStateEnum = "SKIPPED"
	WorkflowInvocationActionStateEnumDisabled  WorkflowInvocationActionStateEnum = "DISABLED"
	WorkflowInvocationActionStateEnumSucceeded WorkflowInvocationActionStateEnum = "SUCCEEDED"
	WorkflowInvocationActionStateEnumCancelled WorkflowInvocationActionStateEnum = "CANCELLED"
	WorkflowInvocationActionStateEnumFailed    WorkflowInvocationActionStateEnum = "FAILED"
)

// WorkflowInvocationAction
// Represents a single action in a workflow invocation.
type WorkflowInvocationAction struct {
	BigqueryAction   *BigQueryAction                    `json:"bigqueryAction,omitempty"`
	CanonicalTarget  *Target                            `json:"canonicalTarget,omitempty"`
	FailureReason    *string                            `json:"failureReason,omitempty"`
	InvocationTiming *Interval                          `json:"invocationTiming,omitempty"`
	State            *WorkflowInvocationActionStateEnum `json:"state,omitempty"`
	Target           *Target                            `json:"target,omitempty"`
}
