package shared

type ActivitiesCollection struct {
	CreatedAt *string                `json:"created_at,omitempty"`
	Origin    map[string]interface{} `json:"origin,omitempty"`
	Type      *string                `json:"type,omitempty"`
}

// Activities
// User's activities.
type Activities struct {
	Collection []ActivitiesCollection `json:"collection,omitempty"`
	FutureHref *string                `json:"future_href,omitempty"`
	NextHref   *string                `json:"next_href,omitempty"`
}
