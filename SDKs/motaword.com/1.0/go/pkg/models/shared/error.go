package shared

type Error struct {
	Code     *string `json:"code,omitempty"`
	Help     *string `json:"help,omitempty"`
	HTTPCode *int32  `json:"http_code,omitempty"`
	Message  *string `json:"message,omitempty"`
}
