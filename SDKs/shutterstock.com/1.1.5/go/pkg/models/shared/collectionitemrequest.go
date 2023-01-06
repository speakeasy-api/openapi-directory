package shared

// CollectionItemRequest
// Request to get a list of items in a collection
type CollectionItemRequest struct {
	Items []CollectionItem `json:"items"`
}
