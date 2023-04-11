import { SpeakeasyBase } from "../../../internal/utils";
/**
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
 */
export declare class MultiCloudCluster extends SpeakeasyBase {
    /**
     * Output only. If cluster_missing is set then it denotes that API(gkemulticloud.googleapis.com) resource for this GKE Multi-Cloud cluster no longer exists.
     */
    clusterMissing?: boolean;
    /**
     * Immutable. Self-link of the GCP resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster
     */
    resourceLink?: string;
}
/**
 * MultiCloudCluster contains information specific to GKE Multi-Cloud clusters.
 */
export declare class MultiCloudClusterInput extends SpeakeasyBase {
    /**
     * Immutable. Self-link of the GCP resource for the GKE Multi-Cloud cluster. For example: //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/awsClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/azureClusters/my-cluster //gkemulticloud.googleapis.com/projects/my-project/locations/us-west1-a/attachedClusters/my-cluster
     */
    resourceLink?: string;
}
