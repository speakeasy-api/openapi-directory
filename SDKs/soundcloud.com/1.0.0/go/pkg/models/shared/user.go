package shared

import (
	"time"
)

// User
// SoundCloud User object
type User struct {
	AvatarURL            *string      `json:"avatar_url,omitempty"`
	City                 *string      `json:"city,omitempty"`
	Country              *string      `json:"country,omitempty"`
	CreatedAt            *time.Time   `json:"created_at,omitempty"`
	Description          *string      `json:"description,omitempty"`
	DiscogsName          *string      `json:"discogs_name,omitempty"`
	FirstName            *string      `json:"first_name,omitempty"`
	FollowersCount       *int64       `json:"followers_count,omitempty"`
	FollowingsCount      *int64       `json:"followings_count,omitempty"`
	FullName             *string      `json:"full_name,omitempty"`
	ID                   *int64       `json:"id,omitempty"`
	Kind                 *string      `json:"kind,omitempty"`
	LastModified         *time.Time   `json:"last_modified,omitempty"`
	LastName             *string      `json:"last_name,omitempty"`
	MyspaceName          *string      `json:"myspace_name,omitempty"`
	Permalink            *string      `json:"permalink,omitempty"`
	PermalinkURL         *string      `json:"permalink_url,omitempty"`
	Plan                 *string      `json:"plan,omitempty"`
	PlaylistCount        *int64       `json:"playlist_count,omitempty"`
	PublicFavoritesCount *int64       `json:"public_favorites_count,omitempty"`
	RepostsCount         *int64       `json:"reposts_count,omitempty"`
	Subscriptions        *interface{} `json:"subscriptions,omitempty"`
	TrackCount           *int64       `json:"track_count,omitempty"`
	URI                  *string      `json:"uri,omitempty"`
	Username             *string      `json:"username,omitempty"`
	Website              *string      `json:"website,omitempty"`
	WebsiteTitle         *string      `json:"website_title,omitempty"`
}
