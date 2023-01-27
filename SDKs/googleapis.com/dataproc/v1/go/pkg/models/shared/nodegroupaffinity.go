package shared

// NodeGroupAffinity
// Node Group Affinity for clusters using sole-tenant node groups. The Dataproc NodeGroupAffinity resource is not related to the Dataproc NodeGroup resource.
type NodeGroupAffinity struct {
	NodeGroupURI *string `json:"nodeGroupUri,omitempty"`
}
