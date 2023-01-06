package shared

// ListBatchesResponseBodyPaginationLink
// Helpful links to other pages of results
type ListBatchesResponseBodyPaginationLink struct {
	First Link         `json:"first"`
	Last  Link         `json:"last"`
	Next  OptionalLink `json:"next"`
	Prev  OptionalLink `json:"prev"`
}

// ListBatchesResponseBody
// A list batch response body
type ListBatchesResponseBody struct {
	Batches []Batch                               `json:"batches"`
	Links   ListBatchesResponseBodyPaginationLink `json:"links"`
	Page    int32                                 `json:"page"`
	Pages   int32                                 `json:"pages"`
	Total   int64                                 `json:"total"`
}
