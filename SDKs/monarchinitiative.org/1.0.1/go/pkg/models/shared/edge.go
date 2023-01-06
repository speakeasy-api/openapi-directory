package shared

type Edge struct {
	Meta map[string]interface{} `json:"meta,omitempty"`
	Obj  *string                `json:"obj,omitempty"`
	Pred *string                `json:"pred,omitempty"`
	Sub  *string                `json:"sub,omitempty"`
}
