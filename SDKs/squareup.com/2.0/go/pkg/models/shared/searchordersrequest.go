package shared

// SearchOrdersRequest
// The request does not have any required fields. When given no query criteria,
// `SearchOrders` returns all results for all of the seller's locations. When retrieving additional
// pages using a `cursor`, the `query` must be equal to the `query` used to retrieve the first page of
// results.
type SearchOrdersRequest struct {
	Cursor        *string            `json:"cursor,omitempty"`
	Limit         *int64             `json:"limit,omitempty"`
	LocationIds   []string           `json:"location_ids,omitempty"`
	Query         *SearchOrdersQuery `json:"query,omitempty"`
	ReturnEntries *bool              `json:"return_entries,omitempty"`
}
