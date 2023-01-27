package shared

// AgentTimingInfo
// VM timing information
type AgentTimingInfo struct {
	AgentStartupTime  *string `json:"agentStartupTime,omitempty"`
	BootTime          *string `json:"bootTime,omitempty"`
	ScriptStartupTime *string `json:"scriptStartupTime,omitempty"`
}
