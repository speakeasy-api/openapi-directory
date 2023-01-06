package shared

import (
	"time"
)

// Image
// Information about an image
type Image struct {
	AddedDate          *time.Time     `json:"added_date,omitempty"`
	AffiliateURL       *string        `json:"affiliate_url,omitempty"`
	Aspect             *float64       `json:"aspect,omitempty"`
	Assets             *ImageAssets   `json:"assets,omitempty"`
	Categories         []Category     `json:"categories,omitempty"`
	Contributor        Contributor    `json:"contributor"`
	Description        *string        `json:"description,omitempty"`
	HasModelRelease    *bool          `json:"has_model_release,omitempty"`
	HasPropertyRelease *bool          `json:"has_property_release,omitempty"`
	ID                 string         `json:"id"`
	ImageType          *string        `json:"image_type,omitempty"`
	IsAdult            *bool          `json:"is_adult,omitempty"`
	IsEditorial        *bool          `json:"is_editorial,omitempty"`
	IsIllustration     *bool          `json:"is_illustration,omitempty"`
	Keywords           []string       `json:"keywords,omitempty"`
	MediaType          string         `json:"media_type"`
	ModelReleases      []ModelRelease `json:"model_releases,omitempty"`
	Models             []Model        `json:"models,omitempty"`
	Releases           []string       `json:"releases,omitempty"`
	URL                *string        `json:"url,omitempty"`
}
