package shared

import (
	"time"
)

// EditorialContent
// Metadata about editorial content
type EditorialContent struct {
	Aspect              *float64            `json:"aspect,omitempty"`
	Assets              *EditorialAssets    `json:"assets,omitempty"`
	Byline              *string             `json:"byline,omitempty"`
	Caption             *string             `json:"caption,omitempty"`
	Categories          []EditorialCategory `json:"categories,omitempty"`
	DateTaken           *time.Time          `json:"date_taken,omitempty"`
	Description         *string             `json:"description,omitempty"`
	ID                  string              `json:"id"`
	Keywords            []string            `json:"keywords,omitempty"`
	SpecialInstructions *string             `json:"special_instructions,omitempty"`
	Title               *string             `json:"title,omitempty"`
}
