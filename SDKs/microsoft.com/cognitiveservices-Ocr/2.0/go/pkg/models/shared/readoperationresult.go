package shared

// ReadOperationResult
// OCR result of the read operation.
type ReadOperationResult struct {
	RecognitionResults []TextRecognitionResult `json:"recognitionResults,omitempty"`
	Status             *OperationStatusEnum    `json:"status,omitempty"`
}
