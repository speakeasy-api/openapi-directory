package shared

type ProjectList struct {
	Meta     *PagingMeta `json:"meta,omitempty"`
	Projects []Project   `json:"projects,omitempty"`
}
