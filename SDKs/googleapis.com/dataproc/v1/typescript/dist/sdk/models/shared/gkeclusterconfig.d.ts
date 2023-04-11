import { SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolTarget } from "./gkenodepooltarget";
import { NamespacedGkeDeploymentTarget } from "./namespacedgkedeploymenttarget";
/**
 * The cluster's GKE config.
 */
export declare class GkeClusterConfig extends SpeakeasyBase {
    /**
     * Optional. A target GKE cluster to deploy to. It must be in the same project and region as the Dataproc cluster (the GKE cluster can be zonal or regional). Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
     */
    gkeClusterTarget?: string;
    /**
     * Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
     */
    namespacedGkeDeploymentTarget?: NamespacedGkeDeploymentTarget;
    /**
     * Optional. GKE node pools where workloads will be scheduled. At least one node pool must be assigned the DEFAULT GkeNodePoolTarget.Role. If a GkeNodePoolTarget is not specified, Dataproc constructs a DEFAULT GkeNodePoolTarget. Each role can be given to only one GkeNodePoolTarget. All node pools must have the same location settings.
     */
    nodePoolTarget?: GkeNodePoolTarget[];
}
