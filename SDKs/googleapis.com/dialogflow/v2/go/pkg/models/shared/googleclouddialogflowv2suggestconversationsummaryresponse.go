package shared

// GoogleCloudDialogflowV2SuggestConversationSummaryResponse
// The response message for Conversations.SuggestConversationSummary.
type GoogleCloudDialogflowV2SuggestConversationSummaryResponse struct {
	ContextSize   *int32                                                            `json:"contextSize,omitempty"`
	LatestMessage *string                                                           `json:"latestMessage,omitempty"`
	Summary       *GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary `json:"summary,omitempty"`
}
