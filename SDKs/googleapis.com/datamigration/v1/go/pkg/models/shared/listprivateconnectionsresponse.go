package shared

// ListPrivateConnectionsResponse
// Response message for 'ListPrivateConnections' request.
type ListPrivateConnectionsResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	PrivateConnections []PrivateConnection `json:"privateConnections,omitempty"`
	Unreachable        []string            `json:"unreachable,omitempty"`
}
