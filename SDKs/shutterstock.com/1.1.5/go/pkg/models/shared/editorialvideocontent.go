package shared

import (
	"time"
)

// EditorialVideoContent
// Metadata about editorial content
type EditorialVideoContent struct {
	Aspect      *float64              `json:"aspect,omitempty"`
	Assets      *EditorialVideoAssets `json:"assets,omitempty"`
	Byline      *string               `json:"byline,omitempty"`
	Caption     *string               `json:"caption,omitempty"`
	Categories  []EditorialCategory   `json:"categories,omitempty"`
	DateTaken   *time.Time            `json:"date_taken,omitempty"`
	Description *string               `json:"description,omitempty"`
	ID          string                `json:"id"`
	Keywords    []string              `json:"keywords,omitempty"`
	Title       *string               `json:"title,omitempty"`
}
