package shared

type Error struct {
	Code    *int64        `json:"code,omitempty"`
	Error   *string       `json:"error,omitempty"`
	Errors  []interface{} `json:"errors,omitempty"`
	Link    *string       `json:"link,omitempty"`
	Message *string       `json:"message,omitempty"`
	Status  *string       `json:"status,omitempty"`
}
