// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// BulkImageSearchResults - List of search results for each given query
type BulkImageSearchResults struct {
	// Unique identifier for the search request
	BulkSearchID *string `json:"bulk_search_id,omitempty"`
	// List of image search results
	Results []ImageSearchResults `json:"results,omitempty"`
}
