package shared

import (
	"time"
)

// SuggestedTagAndRegion
// Result of a suggested tags and regions request.
type SuggestedTagAndRegion struct {
	Created               *time.Time   `json:"created,omitempty"`
	ID                    *string      `json:"id,omitempty"`
	Iteration             *string      `json:"iteration,omitempty"`
	PredictionUncertainty *float64     `json:"predictionUncertainty,omitempty"`
	Predictions           []Prediction `json:"predictions,omitempty"`
	Project               *string      `json:"project,omitempty"`
}
