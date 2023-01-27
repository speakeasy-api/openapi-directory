package shared

// ReportAgentStateResponse
// Response to ReportAgentStateRequest.
type ReportAgentStateResponse struct {
	DefaultReportInterval *string     `json:"defaultReportInterval,omitempty"`
	MinReportInterval     *string     `json:"minReportInterval,omitempty"`
	Tasks                 []AgentTask `json:"tasks,omitempty"`
}
