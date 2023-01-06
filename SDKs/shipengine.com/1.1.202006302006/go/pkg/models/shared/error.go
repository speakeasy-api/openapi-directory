package shared

// Error
// The error structure that gets returned with almost all failed API calls
type Error struct {
	ErrorCode   ErrorCodeEnum   `json:"error_code"`
	ErrorSource ErrorSourceEnum `json:"error_source"`
	ErrorType   ErrorTypeEnum   `json:"error_type"`
	Message     string          `json:"message"`
}
