package shared

// GoogleCloudDialogflowV2Sentiment
// The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result.
type GoogleCloudDialogflowV2Sentiment struct {
	Magnitude *float32 `json:"magnitude,omitempty"`
	Score     *float32 `json:"score,omitempty"`
}
