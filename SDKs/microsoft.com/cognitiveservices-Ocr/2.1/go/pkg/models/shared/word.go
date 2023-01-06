package shared

type WordConfidenceEnum string

const (
	WordConfidenceEnumHigh WordConfidenceEnum = "High"
	WordConfidenceEnumLow  WordConfidenceEnum = "Low"
)

// Word
// An object representing a recognized word.
type Word struct {
	BoundingBox []float64           `json:"boundingBox"`
	Confidence  *WordConfidenceEnum `json:"confidence,omitempty"`
	Text        string              `json:"text"`
}
