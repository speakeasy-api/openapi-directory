import { SpeakeasyBase } from "../../../internal/utils";
/**
 * GkeCluster contains information specific to GKE clusters.
 */
export declare class GkeCluster extends SpeakeasyBase {
    /**
     * Output only. If cluster_missing is set then it denotes that the GKE cluster no longer exists in the GKE Control Plane.
     */
    clusterMissing?: boolean;
    /**
     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
     */
    resourceLink?: string;
}
/**
 * GkeCluster contains information specific to GKE clusters.
 */
export declare class GkeClusterInput extends SpeakeasyBase {
    /**
     * Immutable. Self-link of the GCP resource for the GKE cluster. For example: //container.googleapis.com/projects/my-project/locations/us-west1-a/clusters/my-cluster Zonal clusters are also supported.
     */
    resourceLink?: string;
}
