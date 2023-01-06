package operations

import (
	"openapi/pkg/models/shared"
)

type PutPlaylistsPlaylistIDPathParams struct {
	PlaylistID int64 `pathParam:"style=simple,explode=false,name=playlist_id"`
}

type PutPlaylistsPlaylistIDSecurity struct {
	AuthHeader shared.SchemeAuthHeader `security:"scheme,type=apiKey,subtype=header"`
}

// PutPlaylistsPlaylistID200ApplicationJSONTracks
// Soundcloud Track object.
type PutPlaylistsPlaylistID200ApplicationJSONTracks struct {
	ArtworkURL        *string          `json:"artwork_url,omitempty"`
	Bpm               *int64           `json:"bpm,omitempty"`
	CommentCount      *int64           `json:"comment_count,omitempty"`
	Commentable       *bool            `json:"commentable,omitempty"`
	CreatedAt         *string          `json:"created_at,omitempty"`
	Description       *string          `json:"description,omitempty"`
	DownloadCount     *int64           `json:"download_count,omitempty"`
	Downloadable      *string          `json:"downloadable,omitempty"`
	Duration          *int64           `json:"duration,omitempty"`
	EmbeddableBy      *string          `json:"embeddable_by,omitempty"`
	FavoritingsCount  *int64           `json:"favoritings_count,omitempty"`
	Genre             *string          `json:"genre,omitempty"`
	ID                *int64           `json:"id,omitempty"`
	Isrc              *string          `json:"isrc,omitempty"`
	KeySignature      *string          `json:"key_signature,omitempty"`
	Kind              *string          `json:"kind,omitempty"`
	LabelName         *string          `json:"label_name,omitempty"`
	License           *string          `json:"license,omitempty"`
	PermalinkURL      *string          `json:"permalink_url,omitempty"`
	PlaybackCount     *int64           `json:"playback_count,omitempty"`
	PurchaseTitle     *string          `json:"purchase_title,omitempty"`
	PurchaseURL       *string          `json:"purchase_url,omitempty"`
	Release           *string          `json:"release,omitempty"`
	ReleaseDay        *int64           `json:"release_day,omitempty"`
	ReleaseMonth      *int64           `json:"release_month,omitempty"`
	ReleaseYear       *int64           `json:"release_year,omitempty"`
	Sharing           *string          `json:"sharing,omitempty"`
	StreamURL         *string          `json:"stream_url,omitempty"`
	Streamable        *bool            `json:"streamable,omitempty"`
	TagList           *string          `json:"tag_list,omitempty"`
	Title             *string          `json:"title,omitempty"`
	URI               *string          `json:"uri,omitempty"`
	User              *shared.MetaUser `json:"user,omitempty"`
	UserFavorite      *bool            `json:"user_favorite,omitempty"`
	UserPlaybackCount *int64           `json:"user_playback_count,omitempty"`
	WaveformURL       *string          `json:"waveform_url,omitempty"`
}

// PutPlaylistsPlaylistID200ApplicationJSON
// Soundcloud Playlist Object
type PutPlaylistsPlaylistID200ApplicationJSON struct {
	ArtworkURL    *string                                          `json:"artwork_url,omitempty"`
	CreatedAt     *string                                          `json:"created_at,omitempty"`
	Description   *string                                          `json:"description,omitempty"`
	Downloadable  *bool                                            `json:"downloadable,omitempty"`
	Duration      *int64                                           `json:"duration,omitempty"`
	Ean           *string                                          `json:"ean,omitempty"`
	EmbeddableBy  *string                                          `json:"embeddable_by,omitempty"`
	Genre         *string                                          `json:"genre,omitempty"`
	ID            *int64                                           `json:"id,omitempty"`
	Kind          *string                                          `json:"kind,omitempty"`
	LabelID       *int64                                           `json:"label_id,omitempty"`
	LabelName     *string                                          `json:"label_name,omitempty"`
	LastModified  *string                                          `json:"last_modified,omitempty"`
	License       *string                                          `json:"license,omitempty"`
	Permalink     *string                                          `json:"permalink,omitempty"`
	PermalinkURL  *string                                          `json:"permalink_url,omitempty"`
	PlaylistType  *string                                          `json:"playlist_type,omitempty"`
	PurchaseTitle *string                                          `json:"purchase_title,omitempty"`
	PurchaseURL   *string                                          `json:"purchase_url,omitempty"`
	Release       *string                                          `json:"release,omitempty"`
	ReleaseDay    *int64                                           `json:"release_day,omitempty"`
	ReleaseMonth  *int64                                           `json:"release_month,omitempty"`
	ReleaseYear   *int64                                           `json:"release_year,omitempty"`
	Sharing       *string                                          `json:"sharing,omitempty"`
	Streamable    *bool                                            `json:"streamable,omitempty"`
	TagList       *string                                          `json:"tag_list,omitempty"`
	Title         *string                                          `json:"title,omitempty"`
	TrackCount    *int64                                           `json:"track_count,omitempty"`
	Tracks        []PutPlaylistsPlaylistID200ApplicationJSONTracks `json:"tracks,omitempty"`
	Type          *string                                          `json:"type,omitempty"`
	URI           *string                                          `json:"uri,omitempty"`
	User          *shared.MetaUser                                 `json:"user,omitempty"`
	UserID        *int64                                           `json:"user_id,omitempty"`
}

type PutPlaylistsPlaylistIDRequest struct {
	PathParams PutPlaylistsPlaylistIDPathParams
	Request    *shared.CreateUpdatePlaylistRequest `request:"mediaType=application/json"`
	Security   PutPlaylistsPlaylistIDSecurity
}

type PutPlaylistsPlaylistIDResponse struct {
	ContentType                                    string
	Error                                          *shared.Error
	StatusCode                                     int64
	PutPlaylistsPlaylistID200ApplicationJSONObject *PutPlaylistsPlaylistID200ApplicationJSON
}
