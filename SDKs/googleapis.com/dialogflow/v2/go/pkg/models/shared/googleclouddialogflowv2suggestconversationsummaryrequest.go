package shared

// GoogleCloudDialogflowV2SuggestConversationSummaryRequest
// The request message for Conversations.SuggestConversationSummary.
type GoogleCloudDialogflowV2SuggestConversationSummaryRequest struct {
	ContextSize   *int32  `json:"contextSize,omitempty"`
	LatestMessage *string `json:"latestMessage,omitempty"`
}
