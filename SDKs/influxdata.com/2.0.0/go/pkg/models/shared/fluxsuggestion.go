package shared

type FluxSuggestion struct {
	Name   *string           `json:"name,omitempty"`
	Params map[string]string `json:"params,omitempty"`
}
