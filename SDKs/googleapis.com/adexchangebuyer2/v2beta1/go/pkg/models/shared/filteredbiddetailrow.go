// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// FilteredBidDetailRow - The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
type FilteredBidDetailRow struct {
	// A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled).
	BidCount *MetricValue `json:"bidCount,omitempty"`
	// The ID of the detail, can be numeric or text. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.
	Detail *string `json:"detail,omitempty"`
	// Note: this field will be deprecated, use "detail" field instead. When "detail" field represents an integer value, this field is populated as the same integer value "detail" field represents, otherwise this field will be 0. The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message.
	DetailID *int `json:"detailId,omitempty"`
	// A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row.
	RowDimensions *RowDimensions `json:"rowDimensions,omitempty"`
}
