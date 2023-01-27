package shared

// ResizeNodeGroupRequest
// A request to resize a node group.
type ResizeNodeGroupRequest struct {
	GracefulDecommissionTimeout *string `json:"gracefulDecommissionTimeout,omitempty"`
	RequestID                   *string `json:"requestId,omitempty"`
	Size                        *int32  `json:"size,omitempty"`
}
