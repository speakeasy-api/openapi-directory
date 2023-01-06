package shared

// ComputerVisionError
// Details about the API request error.
type ComputerVisionError struct {
	Code      interface{} `json:"code"`
	Message   string      `json:"message"`
	RequestID *string     `json:"requestId,omitempty"`
}
