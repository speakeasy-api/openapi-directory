// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// OnPremClusterClusterTypeEnum - Immutable. The on prem cluster's type.
type OnPremClusterClusterTypeEnum string

const (
	OnPremClusterClusterTypeEnumClustertypeUnspecified OnPremClusterClusterTypeEnum = "CLUSTERTYPE_UNSPECIFIED"
	OnPremClusterClusterTypeEnumBootstrap              OnPremClusterClusterTypeEnum = "BOOTSTRAP"
	OnPremClusterClusterTypeEnumHybrid                 OnPremClusterClusterTypeEnum = "HYBRID"
	OnPremClusterClusterTypeEnumStandalone             OnPremClusterClusterTypeEnum = "STANDALONE"
	OnPremClusterClusterTypeEnumUser                   OnPremClusterClusterTypeEnum = "USER"
)

func (e OnPremClusterClusterTypeEnum) ToPointer() *OnPremClusterClusterTypeEnum {
	return &e
}

func (e *OnPremClusterClusterTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CLUSTERTYPE_UNSPECIFIED":
		fallthrough
	case "BOOTSTRAP":
		fallthrough
	case "HYBRID":
		fallthrough
	case "STANDALONE":
		fallthrough
	case "USER":
		*e = OnPremClusterClusterTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for OnPremClusterClusterTypeEnum: %v", v)
	}
}

// OnPremCluster - OnPremCluster contains information specific to GKE On-Prem clusters.
type OnPremCluster struct {
	// Immutable. Whether the cluster is an admin cluster.
	AdminCluster *bool `json:"adminCluster,omitempty"`
	// Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists.
	ClusterMissing *bool `json:"clusterMissing,omitempty"`
	// Immutable. The on prem cluster's type.
	ClusterType *OnPremClusterClusterTypeEnum `json:"clusterType,omitempty"`
	// Immutable. Self-link of the Google Cloud resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster
	ResourceLink *string `json:"resourceLink,omitempty"`
}

// OnPremClusterInput - OnPremCluster contains information specific to GKE On-Prem clusters.
type OnPremClusterInput struct {
	// Immutable. Whether the cluster is an admin cluster.
	AdminCluster *bool `json:"adminCluster,omitempty"`
	// Immutable. The on prem cluster's type.
	ClusterType *OnPremClusterClusterTypeEnum `json:"clusterType,omitempty"`
	// Immutable. Self-link of the Google Cloud resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster
	ResourceLink *string `json:"resourceLink,omitempty"`
}
