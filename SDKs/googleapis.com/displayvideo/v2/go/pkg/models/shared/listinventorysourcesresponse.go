// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListInventorySourcesResponse - Successful response
type ListInventorySourcesResponse struct {
	// The list of inventory sources. This list will be absent if empty.
	InventorySources []InventorySource `json:"inventorySources,omitempty"`
	// A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListInventorySources` method to retrieve the next page of results.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
