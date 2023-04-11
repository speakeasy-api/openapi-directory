import { SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolConfig } from "./gkenodepoolconfig";
export declare enum GkeNodePoolTargetRolesEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Default = "DEFAULT",
    Controller = "CONTROLLER",
    SparkDriver = "SPARK_DRIVER",
    SparkExecutor = "SPARK_EXECUTOR"
}
/**
 * GKE node pools that Dataproc workloads run on.
 */
export declare class GkeNodePoolTarget extends SpeakeasyBase {
    /**
     * Required. The target GKE node pool. Format: 'projects/{project}/locations/{location}/clusters/{cluster}/nodePools/{node_pool}'
     */
    nodePool?: string;
    /**
     * The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
     */
    nodePoolConfig?: GkeNodePoolConfig;
    /**
     * Required. The roles associated with the GKE node pool.
     */
    roles?: GkeNodePoolTargetRolesEnum[];
}
