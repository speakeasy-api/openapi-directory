package shared

type ActivityList struct {
	Activities []Activity  `json:"activities,omitempty"`
	Meta       *PagingMeta `json:"meta,omitempty"`
}
