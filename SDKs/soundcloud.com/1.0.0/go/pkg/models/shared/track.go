package shared

type TrackAccessEnum string

const (
	TrackAccessEnumPlayable TrackAccessEnum = "playable"
	TrackAccessEnumPreview  TrackAccessEnum = "preview"
	TrackAccessEnumBlocked  TrackAccessEnum = "blocked"
	TrackAccessEnumNull     TrackAccessEnum = "null"
)

// Track
// Soundcloud Track object.
type Track struct {
	Access                *TrackAccessEnum `json:"access,omitempty"`
	ArtworkURL            *string          `json:"artwork_url,omitempty"`
	AvailableCountryCodes *string          `json:"available_country_codes,omitempty"`
	Bpm                   *int64           `json:"bpm,omitempty"`
	CommentCount          *int64           `json:"comment_count,omitempty"`
	Commentable           *bool            `json:"commentable,omitempty"`
	CreatedAt             *string          `json:"created_at,omitempty"`
	Description           *string          `json:"description,omitempty"`
	DownloadCount         *int64           `json:"download_count,omitempty"`
	DownloadURL           *string          `json:"download_url,omitempty"`
	Downloadable          *string          `json:"downloadable,omitempty"`
	Duration              *int64           `json:"duration,omitempty"`
	EmbeddableBy          *string          `json:"embeddable_by,omitempty"`
	FavoritingsCount      *int64           `json:"favoritings_count,omitempty"`
	Genre                 *string          `json:"genre,omitempty"`
	ID                    *int64           `json:"id,omitempty"`
	Isrc                  *string          `json:"isrc,omitempty"`
	KeySignature          *string          `json:"key_signature,omitempty"`
	Kind                  *string          `json:"kind,omitempty"`
	LabelName             *string          `json:"label_name,omitempty"`
	License               *string          `json:"license,omitempty"`
	PermalinkURL          *string          `json:"permalink_url,omitempty"`
	PlaybackCount         *int64           `json:"playback_count,omitempty"`
	PurchaseTitle         *string          `json:"purchase_title,omitempty"`
	PurchaseURL           *string          `json:"purchase_url,omitempty"`
	Release               *string          `json:"release,omitempty"`
	ReleaseDay            *int64           `json:"release_day,omitempty"`
	ReleaseMonth          *int64           `json:"release_month,omitempty"`
	ReleaseYear           *int64           `json:"release_year,omitempty"`
	RepostsCount          *int64           `json:"reposts_count,omitempty"`
	SecretURI             *string          `json:"secret_uri,omitempty"`
	Sharing               *string          `json:"sharing,omitempty"`
	StreamURL             *string          `json:"stream_url,omitempty"`
	Streamable            *bool            `json:"streamable,omitempty"`
	TagList               *string          `json:"tag_list,omitempty"`
	Title                 *string          `json:"title,omitempty"`
	URI                   *string          `json:"uri,omitempty"`
	User                  *MetaUser        `json:"user,omitempty"`
	UserFavorite          *bool            `json:"user_favorite,omitempty"`
	UserPlaybackCount     *int64           `json:"user_playback_count,omitempty"`
	WaveformURL           *string          `json:"waveform_url,omitempty"`
}
