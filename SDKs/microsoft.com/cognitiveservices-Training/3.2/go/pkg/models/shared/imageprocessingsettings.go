package shared

// ImageProcessingSettings
// Represents image preprocessing settings used by image augmentation.
type ImageProcessingSettings struct {
	AugmentationMethods map[string]bool `json:"augmentationMethods,omitempty"`
}
