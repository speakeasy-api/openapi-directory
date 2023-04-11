import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RollbackNodePoolUpgradeRequest rollbacks the previously Aborted or Failed NodePool upgrade. This will be an no-op if the last upgrade successfully completed.
 */
export declare class RollbackNodePoolUpgradeRequest extends SpeakeasyBase {
    /**
     * Required. Deprecated. The name of the cluster to rollback. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`.
     */
    name?: string;
    /**
     * Required. Deprecated. The name of the node pool to rollback. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Option for rollback to ignore the PodDisruptionBudget. Default value is false.
     */
    respectPdb?: boolean;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
