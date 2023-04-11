import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Immutable. The on prem cluster's type.
 */
export declare enum OnPremClusterClusterTypeEnum {
    ClustertypeUnspecified = "CLUSTERTYPE_UNSPECIFIED",
    Bootstrap = "BOOTSTRAP",
    Hybrid = "HYBRID",
    Standalone = "STANDALONE",
    User = "USER"
}
/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
 */
export declare class OnPremCluster extends SpeakeasyBase {
    /**
     * Immutable. Whether the cluster is an admin cluster.
     */
    adminCluster?: boolean;
    /**
     * Output only. If cluster_missing is set then it denotes that API(gkeonprem.googleapis.com) resource for this GKE On-Prem cluster no longer exists.
     */
    clusterMissing?: boolean;
    /**
     * Immutable. The on prem cluster's type.
     */
    clusterType?: OnPremClusterClusterTypeEnum;
    /**
     * Immutable. Self-link of the GCP resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster
     */
    resourceLink?: string;
}
/**
 * OnPremCluster contains information specific to GKE On-Prem clusters.
 */
export declare class OnPremClusterInput extends SpeakeasyBase {
    /**
     * Immutable. Whether the cluster is an admin cluster.
     */
    adminCluster?: boolean;
    /**
     * Immutable. The on prem cluster's type.
     */
    clusterType?: OnPremClusterClusterTypeEnum;
    /**
     * Immutable. Self-link of the GCP resource for the GKE On-Prem cluster. For example: //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/vmwareClusters/my-cluster //gkeonprem.googleapis.com/projects/my-project/locations/us-west1-a/bareMetalClusters/my-cluster
     */
    resourceLink?: string;
}
