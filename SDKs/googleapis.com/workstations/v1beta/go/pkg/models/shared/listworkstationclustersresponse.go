package shared

// ListWorkstationClustersResponse
// Response message for ListWorkstationClusters.
type ListWorkstationClustersResponse struct {
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
	Unreachable         []string             `json:"unreachable,omitempty"`
	WorkstationClusters []WorkstationCluster `json:"workstationClusters,omitempty"`
}
