package shared

// GetCarriersResponseBody
// An error response body
type GetCarriersResponseBody struct {
	Errors    []Error `json:"errors"`
	RequestID string  `json:"request_id"`
}
