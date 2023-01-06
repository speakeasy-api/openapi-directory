package shared

type CommentList struct {
	Activities []Comment   `json:"activities,omitempty"`
	Meta       *PagingMeta `json:"meta,omitempty"`
}
