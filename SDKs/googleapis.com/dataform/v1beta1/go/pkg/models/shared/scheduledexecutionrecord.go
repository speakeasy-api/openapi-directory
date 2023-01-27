package shared

// ScheduledExecutionRecord
// A record of an attempt to create a workflow invocation for this workflow config.
type ScheduledExecutionRecord struct {
	ErrorStatus        *Status `json:"errorStatus,omitempty"`
	ExecutionTime      *string `json:"executionTime,omitempty"`
	WorkflowInvocation *string `json:"workflowInvocation,omitempty"`
}
