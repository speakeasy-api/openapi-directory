import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated. Used only for the deprecated beta. A full, namespace-isolated deployment target for an existing GKE cluster.
 */
export declare class NamespacedGkeDeploymentTarget extends SpeakeasyBase {
    /**
     * Optional. A namespace within the GKE cluster to deploy into.
     */
    clusterNamespace?: string;
    /**
     * Optional. The target GKE cluster to deploy to. Format: 'projects/{project}/locations/{location}/clusters/{cluster_id}'
     */
    targetGkeCluster?: string;
}
