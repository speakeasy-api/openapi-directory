package shared

type DocumentList struct {
	Documents []Document  `json:"documents,omitempty"`
	Meta      *PagingMeta `json:"meta,omitempty"`
}
