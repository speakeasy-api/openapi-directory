package shared

// ListWorkflowInvocationsResponse
// `ListWorkflowInvocations` response message.
type ListWorkflowInvocationsResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	Unreachable         []string             `json:"unreachable,omitempty"`
	WorkflowInvocations []WorkflowInvocation `json:"workflowInvocations,omitempty"`
}
