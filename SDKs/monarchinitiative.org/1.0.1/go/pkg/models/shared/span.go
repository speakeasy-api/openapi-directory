package shared

type Span struct {
	End   *int64  `json:"end,omitempty"`
	Start *int64  `json:"start,omitempty"`
	Text  *string `json:"text,omitempty"`
	Token []Token `json:"token,omitempty"`
}
