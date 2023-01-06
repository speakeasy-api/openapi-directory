package shared

type WebProfiles struct {
	CreatedAt *string `json:"created_at,omitempty"`
	ID        *int64  `json:"id,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	Service   *string `json:"service,omitempty"`
	Title     *string `json:"title,omitempty"`
	URL       *string `json:"url,omitempty"`
	Username  *string `json:"username,omitempty"`
}
