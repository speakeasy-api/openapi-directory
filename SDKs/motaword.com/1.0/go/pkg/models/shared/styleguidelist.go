package shared

type StyleGuideList struct {
	Meta        *PagingMeta  `json:"meta,omitempty"`
	Styleguides []StyleGuide `json:"styleguides,omitempty"`
}
