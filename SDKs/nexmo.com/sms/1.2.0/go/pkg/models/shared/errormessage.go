package shared

type ErrorMessage struct {
	ErrorText *string `json:"error-text,omitempty"`
	Status    *string `json:"status,omitempty"`
}
