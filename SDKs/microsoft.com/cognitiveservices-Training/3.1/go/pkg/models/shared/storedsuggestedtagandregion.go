package shared

import (
	"time"
)

// StoredSuggestedTagAndRegion
// Result of a suggested tags and regions request of the untagged image.
type StoredSuggestedTagAndRegion struct {
	Created               *time.Time   `json:"created,omitempty"`
	Domain                *string      `json:"domain,omitempty"`
	Height                *int32       `json:"height,omitempty"`
	ID                    *string      `json:"id,omitempty"`
	Iteration             *string      `json:"iteration,omitempty"`
	OriginalImageURI      *string      `json:"originalImageUri,omitempty"`
	PredictionUncertainty *float64     `json:"predictionUncertainty,omitempty"`
	Predictions           []Prediction `json:"predictions,omitempty"`
	Project               *string      `json:"project,omitempty"`
	ResizedImageURI       *string      `json:"resizedImageUri,omitempty"`
	ThumbnailURI          *string      `json:"thumbnailUri,omitempty"`
	Width                 *int32       `json:"width,omitempty"`
}
