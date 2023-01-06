package shared

type EntityAnnotationResult struct {
	Content *string `json:"content,omitempty"`
	Spans   []Span  `json:"spans,omitempty"`
}
