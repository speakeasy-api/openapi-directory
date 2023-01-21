package shared

// GoogleCloudDialogflowV2ConversationModelEvaluation
// Represents evaluation result of a conversation model.
type GoogleCloudDialogflowV2ConversationModelEvaluation struct {
	CreateTime              *string                                   `json:"createTime,omitempty"`
	DisplayName             *string                                   `json:"displayName,omitempty"`
	EvaluationConfig        *GoogleCloudDialogflowV2EvaluationConfig  `json:"evaluationConfig,omitempty"`
	Name                    *string                                   `json:"name,omitempty"`
	RawHumanEvalTemplateCsv *string                                   `json:"rawHumanEvalTemplateCsv,omitempty"`
	SmartReplyMetrics       *GoogleCloudDialogflowV2SmartReplyMetrics `json:"smartReplyMetrics,omitempty"`
}

// GoogleCloudDialogflowV2ConversationModelEvaluationInput
// Represents evaluation result of a conversation model.
type GoogleCloudDialogflowV2ConversationModelEvaluationInput struct {
	DisplayName       *string                                   `json:"displayName,omitempty"`
	EvaluationConfig  *GoogleCloudDialogflowV2EvaluationConfig  `json:"evaluationConfig,omitempty"`
	Name              *string                                   `json:"name,omitempty"`
	SmartReplyMetrics *GoogleCloudDialogflowV2SmartReplyMetrics `json:"smartReplyMetrics,omitempty"`
}
