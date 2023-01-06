package shared

// CommentUser
// SoundCloud User object
type CommentUser struct {
	AvatarURL       *string `json:"avatar_url,omitempty"`
	FollowersCount  *int64  `json:"followers_count,omitempty"`
	FollowingsCount *int64  `json:"followings_count,omitempty"`
	ID              *int64  `json:"id,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	LastModified    *string `json:"last_modified,omitempty"`
	Permalink       *string `json:"permalink,omitempty"`
	PermalinkURL    *string `json:"permalink_url,omitempty"`
	RepostsCount    *int64  `json:"reposts_count,omitempty"`
	URI             *string `json:"uri,omitempty"`
	Username        *string `json:"username,omitempty"`
}

// Comment
// User's Comment
type Comment struct {
	Body      *string      `json:"body,omitempty"`
	CreatedAt *string      `json:"created_at,omitempty"`
	ID        *int64       `json:"id,omitempty"`
	Kind      *string      `json:"kind,omitempty"`
	Timestamp *string      `json:"timestamp,omitempty"`
	TrackID   *int64       `json:"track_id,omitempty"`
	URI       *string      `json:"uri,omitempty"`
	User      *CommentUser `json:"user,omitempty"`
	UserID    *int64       `json:"user_id,omitempty"`
}
