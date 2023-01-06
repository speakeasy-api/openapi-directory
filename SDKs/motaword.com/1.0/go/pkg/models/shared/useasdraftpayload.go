package shared

type UseAsDraftPayload struct {
	FromFileID                  *float64 `json:"fromFileId,omitempty"`
	FromManualTranslationFileID *float64 `json:"fromManualTranslationFileId,omitempty"`
	ToManualTranslationFileID   *float64 `json:"toManualTranslationFileId,omitempty"`
}
