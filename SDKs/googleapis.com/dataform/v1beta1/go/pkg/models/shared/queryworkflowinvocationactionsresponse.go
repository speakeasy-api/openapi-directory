package shared

// QueryWorkflowInvocationActionsResponse
// `QueryWorkflowInvocationActions` response message.
type QueryWorkflowInvocationActionsResponse struct {
	NextPageToken             *string                    `json:"nextPageToken,omitempty"`
	WorkflowInvocationActions []WorkflowInvocationAction `json:"workflowInvocationActions,omitempty"`
}
