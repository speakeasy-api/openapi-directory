package shared

// RetrieveCustomerSegmentResponse
// Defines the fields that are included in the response body for requests to the `RetrieveCustomerSegment` endpoint.
//
// Either `errors` or `segment` is present in a given response (never both).
type RetrieveCustomerSegmentResponse struct {
	Errors  []Error          `json:"errors,omitempty"`
	Segment *CustomerSegment `json:"segment,omitempty"`
}
