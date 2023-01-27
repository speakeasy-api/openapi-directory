package shared

// WorkstationCluster
// A grouping of workstation configurations and the associated workstations in that region.
type WorkstationCluster struct {
	Annotations          map[string]string     `json:"annotations,omitempty"`
	Conditions           []Status              `json:"conditions,omitempty"`
	CreateTime           *string               `json:"createTime,omitempty"`
	Degraded             *bool                 `json:"degraded,omitempty"`
	DeleteTime           *string               `json:"deleteTime,omitempty"`
	DisplayName          *string               `json:"displayName,omitempty"`
	Etag                 *string               `json:"etag,omitempty"`
	Labels               map[string]string     `json:"labels,omitempty"`
	Name                 *string               `json:"name,omitempty"`
	Network              *string               `json:"network,omitempty"`
	PrivateClusterConfig *PrivateClusterConfig `json:"privateClusterConfig,omitempty"`
	Reconciling          *bool                 `json:"reconciling,omitempty"`
	Subnetwork           *string               `json:"subnetwork,omitempty"`
	UID                  *string               `json:"uid,omitempty"`
	UpdateTime           *string               `json:"updateTime,omitempty"`
}

// WorkstationClusterInput
// A grouping of workstation configurations and the associated workstations in that region.
type WorkstationClusterInput struct {
	Annotations          map[string]string          `json:"annotations,omitempty"`
	DisplayName          *string                    `json:"displayName,omitempty"`
	Etag                 *string                    `json:"etag,omitempty"`
	Labels               map[string]string          `json:"labels,omitempty"`
	Name                 *string                    `json:"name,omitempty"`
	Network              *string                    `json:"network,omitempty"`
	PrivateClusterConfig *PrivateClusterConfigInput `json:"privateClusterConfig,omitempty"`
	Subnetwork           *string                    `json:"subnetwork,omitempty"`
}
