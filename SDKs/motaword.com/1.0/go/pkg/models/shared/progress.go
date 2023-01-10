package shared

type Progress struct {
	Languages     map[string]ProgressSub `json:"languages,omitempty"`
	Links         *ProgressLink          `json:"links,omitempty"`
	ProjectStatus *ProjectStatusEnum     `json:"project_status,omitempty"`
	Proofreading  *float32               `json:"proofreading,omitempty"`
	Total         *float32               `json:"total,omitempty"`
	Translation   *float32               `json:"translation,omitempty"`
}
