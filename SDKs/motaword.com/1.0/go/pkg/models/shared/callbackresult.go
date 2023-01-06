package shared

type CallbackResult struct {
	Data   *Project           `json:"data,omitempty"`
	Result *string            `json:"result,omitempty"`
	Type   *ProjectStatusEnum `json:"type,omitempty"`
	URL    *string            `json:"url,omitempty"`
}
