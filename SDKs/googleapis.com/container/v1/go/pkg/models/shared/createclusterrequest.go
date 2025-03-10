// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CreateClusterRequestInput - CreateClusterRequest creates a cluster.
type CreateClusterRequestInput struct {
	// A Google Kubernetes Engine cluster.
	Cluster *ClusterInput `json:"cluster,omitempty"`
	// The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.
	Parent *string `json:"parent,omitempty"`
	// Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
	ProjectID *string `json:"projectId,omitempty"`
	// Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
	Zone *string `json:"zone,omitempty"`
}
