package shared

type Contact struct {
	Created *Updated `json:"created,omitempty"`
	Error   *Error   `json:"error,omitempty"`
	Updated *Updated `json:"updated,omitempty"`
	Valid   *bool    `json:"valid,omitempty"`
}
