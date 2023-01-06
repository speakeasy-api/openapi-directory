package shared

import (
	"time"
)

// MetaUser
// SoundCloud User object.
type MetaUser struct {
	AvatarURL    *string    `json:"avatar_url,omitempty"`
	CreatedAt    *time.Time `json:"created_at,omitempty"`
	ID           *int64     `json:"id,omitempty"`
	Kind         *string    `json:"kind,omitempty"`
	LastModified *time.Time `json:"last_modified,omitempty"`
	Permalink    *string    `json:"permalink,omitempty"`
	PermalinkURL *string    `json:"permalink_url,omitempty"`
	URI          *string    `json:"uri,omitempty"`
	Username     *string    `json:"username,omitempty"`
}
