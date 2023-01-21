package shared

// DetectedObject
// An object detected in an image.
type DetectedObject struct {
	Confidence *float64         `json:"confidence,omitempty"`
	Object     *string          `json:"object,omitempty"`
	Parent     *ObjectHierarchy `json:"parent,omitempty"`
	Rectangle  *BoundingRect    `json:"rectangle,omitempty"`
}
