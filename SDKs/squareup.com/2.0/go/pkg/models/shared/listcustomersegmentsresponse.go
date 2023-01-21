package shared

// ListCustomerSegmentsResponse
// Defines the fields that are included in the response body for requests to the `ListCustomerSegments` endpoint.
//
// Either `errors` or `segments` is present in a given response (never both).
type ListCustomerSegmentsResponse struct {
	Cursor   *string           `json:"cursor,omitempty"`
	Errors   []Error           `json:"errors,omitempty"`
	Segments []CustomerSegment `json:"segments,omitempty"`
}
