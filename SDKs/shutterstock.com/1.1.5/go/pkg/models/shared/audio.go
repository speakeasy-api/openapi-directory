package shared

import (
	"time"
)

// Audio
// Audio metadata
type Audio struct {
	AddedDate        *time.Time     `json:"added_date,omitempty"`
	AffiliateURL     *string        `json:"affiliate_url,omitempty"`
	Album            *Album         `json:"album,omitempty"`
	Artists          []Artist       `json:"artists,omitempty"`
	Assets           *AudioAssets   `json:"assets,omitempty"`
	Bpm              *int64         `json:"bpm,omitempty"`
	Contributor      Contributor    `json:"contributor"`
	DeletedTime      *time.Time     `json:"deleted_time,omitempty"`
	Description      *string        `json:"description,omitempty"`
	Duration         *int64         `json:"duration,omitempty"`
	Genres           []string       `json:"genres,omitempty"`
	ID               string         `json:"id"`
	Instruments      []string       `json:"instruments,omitempty"`
	IsAdult          *bool          `json:"is_adult,omitempty"`
	IsInstrumental   *bool          `json:"is_instrumental,omitempty"`
	Isrc             *string        `json:"isrc,omitempty"`
	Keywords         []string       `json:"keywords,omitempty"`
	Language         *string        `json:"language,omitempty"`
	Lyrics           *string        `json:"lyrics,omitempty"`
	MediaType        string         `json:"media_type"`
	ModelReleases    []ModelRelease `json:"model_releases,omitempty"`
	Moods            []string       `json:"moods,omitempty"`
	PublishedTime    *time.Time     `json:"published_time,omitempty"`
	RecordingVersion *string        `json:"recording_version,omitempty"`
	Releases         []string       `json:"releases,omitempty"`
	SimilarArtists   []Artist       `json:"similar_artists,omitempty"`
	SubmittedTime    *time.Time     `json:"submitted_time,omitempty"`
	Title            *string        `json:"title,omitempty"`
	UpdatedTime      *time.Time     `json:"updated_time,omitempty"`
	URL              *string        `json:"url,omitempty"`
	VocalDescription *string        `json:"vocal_description,omitempty"`
}
