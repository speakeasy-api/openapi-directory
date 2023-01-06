package shared

// RecognizedEntity
// An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.
type RecognizedEntity struct {
	EndIndex   int64                  `json:"end_index"`
	Result     map[string]interface{} `json:"result,omitempty"`
	Score      float64                `json:"score"`
	StartIndex int64                  `json:"start_index"`
	Text       string                 `json:"text"`
	Type       string                 `json:"type"`
}
