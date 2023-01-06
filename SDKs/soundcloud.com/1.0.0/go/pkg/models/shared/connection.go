package shared

type Connection struct {
	CreatedAt    *string `json:"created_at,omitempty"`
	DisplayName  *string `json:"display_name,omitempty"`
	ID           *int64  `json:"id,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	PostFavorite *bool   `json:"post_favorite,omitempty"`
	PostPublish  *bool   `json:"post_publish,omitempty"`
	Service      *string `json:"service,omitempty"`
	Type         *string `json:"type,omitempty"`
	URI          *string `json:"uri,omitempty"`
}
