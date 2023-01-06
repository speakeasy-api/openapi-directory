package shared

// ListBatchErrorsResponseBodyPaginationLink
// Helpful links to other pages of results
type ListBatchErrorsResponseBodyPaginationLink struct {
	First Link         `json:"first"`
	Last  Link         `json:"last"`
	Next  OptionalLink `json:"next"`
	Prev  OptionalLink `json:"prev"`
}

// ListBatchErrorsResponseBody
// A batch errors response body
type ListBatchErrorsResponseBody struct {
	Errors []BatchResponseError                      `json:"errors"`
	Links  ListBatchErrorsResponseBodyPaginationLink `json:"links"`
}
