package shared

type StringTranslation struct {
	Content *string                     `json:"content,omitempty"`
	ID      *string                     `json:"id,omitempty"`
	State   *StringTranslationStateEnum `json:"state,omitempty"`
}
