package shared

// ConsolidationStrategy
// How the individual activities are consolidated. If a set of activities is related they can be consolidated into one combined activity, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
type ConsolidationStrategy struct {
	Legacy map[string]interface{} `json:"legacy,omitempty"`
	None   map[string]interface{} `json:"none,omitempty"`
}
