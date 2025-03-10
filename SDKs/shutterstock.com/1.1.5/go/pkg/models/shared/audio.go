// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"openapi/pkg/types"
	"time"
)

// Audio - Audio metadata
type Audio struct {
	// Date this track was added to the Shutterstock library
	AddedDate *types.Date `json:"added_date,omitempty"`
	// Affiliate referral link; appears only for registered affiliate partners
	AffiliateURL *string `json:"affiliate_url,omitempty"`
	// Album metadata
	Album *Album `json:"album,omitempty"`
	// List of artists
	Artists []Artist `json:"artists,omitempty"`
	// Files that are available as part of an audio asset
	Assets *AudioAssets `json:"assets,omitempty"`
	// BPM (beats per minute) of this track
	Bpm *int64 `json:"bpm,omitempty"`
	// Information about a contributor
	Contributor Contributor `json:"contributor"`
	DeletedTime *time.Time  `json:"deleted_time,omitempty"`
	// Description of this track
	Description *string `json:"description,omitempty"`
	// Duration of this track in seconds
	Duration *int64 `json:"duration,omitempty"`
	// List of all genres for this track
	Genres []string `json:"genres,omitempty"`
	// Shutterstock ID of this track
	ID string `json:"id"`
	// List of all instruments that appear in this track
	Instruments []string `json:"instruments,omitempty"`
	// Whether or not this track contains adult content
	IsAdult *bool `json:"is_adult,omitempty"`
	// Whether or not this track is purely instrumental (lacking lyrics)
	IsInstrumental *bool   `json:"is_instrumental,omitempty"`
	Isrc           *string `json:"isrc,omitempty"`
	// List of all keywords for this track
	Keywords []string `json:"keywords,omitempty"`
	// Language of this track's lyrics
	Language *string `json:"language,omitempty"`
	// Lyrics of this track
	Lyrics *string `json:"lyrics,omitempty"`
	// Media type of this track; should always be "audio"
	MediaType string `json:"media_type"`
	// List of all model releases for this track
	ModelReleases []ModelRelease `json:"model_releases,omitempty"`
	// List of all moods of this track
	Moods []string `json:"moods,omitempty"`
	// Time this track was published
	PublishedTime *time.Time `json:"published_time,omitempty"`
	// Recording version of this track
	RecordingVersion *string `json:"recording_version,omitempty"`
	// List of all releases of this track
	Releases []string `json:"releases,omitempty"`
	// List of all similar artists of this track
	SimilarArtists []Artist `json:"similar_artists,omitempty"`
	// Time this track was submitted
	SubmittedTime *time.Time `json:"submitted_time,omitempty"`
	// Title of this track
	Title *string `json:"title,omitempty"`
	// Time this track was last updated
	UpdatedTime *time.Time `json:"updated_time,omitempty"`
	URL         *string    `json:"url,omitempty"`
	// Vocal description of this track
	VocalDescription *string `json:"vocal_description,omitempty"`
}
