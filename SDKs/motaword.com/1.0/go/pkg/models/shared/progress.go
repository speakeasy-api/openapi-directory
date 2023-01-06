package shared

type Progress struct {
	Proofreading *float32 `json:"proofreading,omitempty"`
	Total        *float32 `json:"total,omitempty"`
	Translation  *float32 `json:"translation,omitempty"`
}
