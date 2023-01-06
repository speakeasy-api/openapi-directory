package shared

// TextOperationResult
// Result of recognition text operation.
type TextOperationResult struct {
	RecognitionResult *TextRecognitionResult `json:"recognitionResult,omitempty"`
	Status            *OperationStatusEnum   `json:"status,omitempty"`
}
