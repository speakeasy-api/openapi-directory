package shared

// ObjectHierarchy
// An object detected inside an image.
type ObjectHierarchy struct {
	Confidence *float64         `json:"confidence,omitempty"`
	Object     *string          `json:"object,omitempty"`
	Parent     *ObjectHierarchy `json:"parent,omitempty"`
}
