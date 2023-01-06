package shared

import (
	"time"
)

// Video
// Information about a video
type Video struct {
	AddedDate          *time.Time   `json:"added_date,omitempty"`
	AffiliateURL       *string      `json:"affiliate_url,omitempty"`
	Aspect             *float64     `json:"aspect,omitempty"`
	AspectRatio        *string      `json:"aspect_ratio,omitempty"`
	Assets             *VideoAssets `json:"assets,omitempty"`
	Categories         []Category   `json:"categories,omitempty"`
	Contributor        Contributor  `json:"contributor"`
	Description        *string      `json:"description,omitempty"`
	Duration           *float64     `json:"duration,omitempty"`
	HasModelRelease    *bool        `json:"has_model_release,omitempty"`
	HasPropertyRelease *bool        `json:"has_property_release,omitempty"`
	ID                 string       `json:"id"`
	IsAdult            *bool        `json:"is_adult,omitempty"`
	IsEditorial        *bool        `json:"is_editorial,omitempty"`
	Keywords           []string     `json:"keywords,omitempty"`
	MediaType          string       `json:"media_type"`
	Models             []Model      `json:"models,omitempty"`
	URL                *string      `json:"url,omitempty"`
}
