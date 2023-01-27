package shared

// ListWorkflowConfigsResponse
// `ListWorkflowConfigs` response message.
type ListWorkflowConfigsResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	Unreachable     []string         `json:"unreachable,omitempty"`
	WorkflowConfigs []WorkflowConfig `json:"workflowConfigs,omitempty"`
}
