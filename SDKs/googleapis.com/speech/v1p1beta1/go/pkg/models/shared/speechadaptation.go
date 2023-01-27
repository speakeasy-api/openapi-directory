package shared

// SpeechAdaptation
// Speech adaptation configuration.
type SpeechAdaptation struct {
	AbnfGrammar         *AbnfGrammar  `json:"abnfGrammar,omitempty"`
	CustomClasses       []CustomClass `json:"customClasses,omitempty"`
	PhraseSetReferences []string      `json:"phraseSetReferences,omitempty"`
	PhraseSets          []PhraseSet   `json:"phraseSets,omitempty"`
}
