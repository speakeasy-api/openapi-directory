package shared

// ReportAgentStateRequest
// Request to report agent's state. The Request itself implies the agent is healthy.
type ReportAgentStateRequest struct {
	AgentInfo       *AgentInfo       `json:"agentInfo,omitempty"`
	AgentTimingInfo *AgentTimingInfo `json:"agentTimingInfo,omitempty"`
	Metadata        *AgentMetadata   `json:"metadata,omitempty"`
}
