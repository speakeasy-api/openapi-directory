package shared

type Comment struct {
	Comment     *string       `json:"comment,omitempty"`
	CommentedAt *int64        `json:"commented_at,omitempty"`
	ID          *int64        `json:"id,omitempty"`
	Links       *CommentLinks `json:"links,omitempty"`
}
