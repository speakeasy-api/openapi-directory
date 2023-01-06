package shared

type PhonePlaybackResponse struct {
	Calling     bool `json:"calling"`
	NumberValid bool `json:"numberValid"`
}
