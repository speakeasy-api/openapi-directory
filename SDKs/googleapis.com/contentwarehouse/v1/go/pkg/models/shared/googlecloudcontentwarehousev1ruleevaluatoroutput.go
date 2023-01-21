package shared

// GoogleCloudContentwarehouseV1RuleEvaluatorOutput
// Represents the output of the Rule Evaluator.
type GoogleCloudContentwarehouseV1RuleEvaluatorOutput struct {
	InvalidRules   []GoogleCloudContentwarehouseV1InvalidRule `json:"invalidRules,omitempty"`
	MatchedRules   []GoogleCloudContentwarehouseV1Rule        `json:"matchedRules,omitempty"`
	TriggeredRules []GoogleCloudContentwarehouseV1Rule        `json:"triggeredRules,omitempty"`
}
