package shared

// Playlist
// Soundcloud Playlist Object
type Playlist struct {
	ArtworkURL    *string   `json:"artwork_url,omitempty"`
	CreatedAt     *string   `json:"created_at,omitempty"`
	Description   *string   `json:"description,omitempty"`
	Downloadable  *bool     `json:"downloadable,omitempty"`
	Duration      *int64    `json:"duration,omitempty"`
	Ean           *string   `json:"ean,omitempty"`
	EmbeddableBy  *string   `json:"embeddable_by,omitempty"`
	Genre         *string   `json:"genre,omitempty"`
	ID            *int64    `json:"id,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
	Label         *MetaUser `json:"label,omitempty"`
	LabelID       *int64    `json:"label_id,omitempty"`
	LabelName     *string   `json:"label_name,omitempty"`
	LastModified  *string   `json:"last_modified,omitempty"`
	License       *string   `json:"license,omitempty"`
	LikesCount    *int64    `json:"likes_count,omitempty"`
	Permalink     *string   `json:"permalink,omitempty"`
	PermalinkURL  *string   `json:"permalink_url,omitempty"`
	PlaylistType  *string   `json:"playlist_type,omitempty"`
	PurchaseTitle *string   `json:"purchase_title,omitempty"`
	PurchaseURL   *string   `json:"purchase_url,omitempty"`
	Release       *string   `json:"release,omitempty"`
	ReleaseDay    *int64    `json:"release_day,omitempty"`
	ReleaseMonth  *int64    `json:"release_month,omitempty"`
	ReleaseYear   *int64    `json:"release_year,omitempty"`
	Sharing       *string   `json:"sharing,omitempty"`
	Streamable    *bool     `json:"streamable,omitempty"`
	TagList       *string   `json:"tag_list,omitempty"`
	Tags          *string   `json:"tags,omitempty"`
	Title         *string   `json:"title,omitempty"`
	TrackCount    *int64    `json:"track_count,omitempty"`
	Tracks        []Track   `json:"tracks,omitempty"`
	TracksURI     *string   `json:"tracks_uri,omitempty"`
	Type          *string   `json:"type,omitempty"`
	URI           *string   `json:"uri,omitempty"`
	User          *MetaUser `json:"user,omitempty"`
	UserID        *int64    `json:"user_id,omitempty"`
}
