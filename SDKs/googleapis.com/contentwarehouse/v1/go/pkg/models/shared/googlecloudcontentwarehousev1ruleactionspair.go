package shared

// GoogleCloudContentwarehouseV1RuleActionsPair
// Represents a rule and outputs of associated actions.
type GoogleCloudContentwarehouseV1RuleActionsPair struct {
	ActionOutputs []GoogleCloudContentwarehouseV1ActionOutput `json:"actionOutputs,omitempty"`
	Rule          *GoogleCloudContentwarehouseV1Rule          `json:"rule,omitempty"`
}
