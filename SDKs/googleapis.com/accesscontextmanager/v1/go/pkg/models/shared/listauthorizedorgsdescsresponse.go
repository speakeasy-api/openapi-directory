package shared

// ListAuthorizedOrgsDescsResponse
// A response to `ListAuthorizedOrgsDescsRequest`.
type ListAuthorizedOrgsDescsResponse struct {
	AuthorizedOrgsDescs []AuthorizedOrgsDesc `json:"authorizedOrgsDescs,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
