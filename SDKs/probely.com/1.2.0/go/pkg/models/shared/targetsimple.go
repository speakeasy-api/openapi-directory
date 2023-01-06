package shared

type TargetSimple struct {
	Desc  *string  `json:"desc,omitempty"`
	ID    *string  `json:"id,omitempty"`
	Name  *string  `json:"name,omitempty"`
	Stack []string `json:"stack,omitempty"`
	URL   *string  `json:"url,omitempty"`
}
