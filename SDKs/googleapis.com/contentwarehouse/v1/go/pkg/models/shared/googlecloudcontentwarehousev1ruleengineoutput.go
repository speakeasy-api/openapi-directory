package shared

// GoogleCloudContentwarehouseV1RuleEngineOutput
// Records the output of Rule Engine including rule evaluation and actions result.
type GoogleCloudContentwarehouseV1RuleEngineOutput struct {
	ActionExecutorOutput *GoogleCloudContentwarehouseV1ActionExecutorOutput `json:"actionExecutorOutput,omitempty"`
	DocumentName         *string                                            `json:"documentName,omitempty"`
	RuleEvaluatorOutput  *GoogleCloudContentwarehouseV1RuleEvaluatorOutput  `json:"ruleEvaluatorOutput,omitempty"`
}
