package shared

// ErrorResponseBody
// An error response body
type ErrorResponseBody struct {
	Errors    []Error `json:"errors"`
	RequestID string  `json:"request_id"`
}
