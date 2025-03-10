// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListInternalRangesResponse - Response for InternalRange.ListInternalRanges
type ListInternalRangesResponse struct {
	// Internal range to be returned.
	InternalRanges []InternalRange `json:"internalRanges,omitempty"`
	// The next pagination token in the List response. It should be used as page_token for the following request. An empty value means no more result.
	NextPageToken *string `json:"nextPageToken,omitempty"`
	// Locations that could not be reached.
	Unreachable []string `json:"unreachable,omitempty"`
}
