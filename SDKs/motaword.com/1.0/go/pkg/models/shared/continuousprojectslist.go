package shared

type ContinuousProjectsList struct {
	Meta     *PagingMeta         `json:"meta,omitempty"`
	Projects []ContinuousProject `json:"projects,omitempty"`
}
