package shared

// ImageTagCreateBatch
// Batch of image tags.
type ImageTagCreateBatch struct {
	Tags []ImageTagCreateEntry `json:"tags,omitempty"`
}
