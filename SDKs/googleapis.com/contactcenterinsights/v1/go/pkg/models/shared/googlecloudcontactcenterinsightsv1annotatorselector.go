package shared

// GoogleCloudContactcenterinsightsV1AnnotatorSelector
// Selector of all available annotators and phrase matchers to run.
type GoogleCloudContactcenterinsightsV1AnnotatorSelector struct {
	IssueModels               []string `json:"issueModels,omitempty"`
	PhraseMatchers            []string `json:"phraseMatchers,omitempty"`
	RunEntityAnnotator        *bool    `json:"runEntityAnnotator,omitempty"`
	RunIntentAnnotator        *bool    `json:"runIntentAnnotator,omitempty"`
	RunInterruptionAnnotator  *bool    `json:"runInterruptionAnnotator,omitempty"`
	RunIssueModelAnnotator    *bool    `json:"runIssueModelAnnotator,omitempty"`
	RunPhraseMatcherAnnotator *bool    `json:"runPhraseMatcherAnnotator,omitempty"`
	RunSentimentAnnotator     *bool    `json:"runSentimentAnnotator,omitempty"`
	RunSilenceAnnotator       *bool    `json:"runSilenceAnnotator,omitempty"`
}
