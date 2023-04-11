import { SpeakeasyBase } from "../../../internal/utils";
import { GkeClusterConfig } from "./gkeclusterconfig";
import { KubernetesSoftwareConfig } from "./kubernetessoftwareconfig";
/**
 * The configuration for running the Dataproc cluster on Kubernetes.
 */
export declare class KubernetesClusterConfig extends SpeakeasyBase {
    /**
     * The cluster's GKE config.
     */
    gkeClusterConfig?: GkeClusterConfig;
    /**
     * Optional. A namespace within the Kubernetes cluster to deploy into. If this namespace does not exist, it is created. If it exists, Dataproc verifies that another Dataproc VirtualCluster is not installed into it. If not specified, the name of the Dataproc Cluster is used.
     */
    kubernetesNamespace?: string;
    /**
     * The software configuration for this Dataproc cluster running on Kubernetes.
     */
    kubernetesSoftwareConfig?: KubernetesSoftwareConfig;
}
