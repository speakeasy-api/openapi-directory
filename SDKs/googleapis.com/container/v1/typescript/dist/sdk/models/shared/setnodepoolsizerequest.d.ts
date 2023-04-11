import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SetNodePoolSizeRequest sets the size of a node pool.
 */
export declare class SetNodePoolSizeRequest extends SpeakeasyBase {
    /**
     * Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set size. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`.
     */
    name?: string;
    /**
     * Required. The desired node count for the pool.
     */
    nodeCount?: number;
    /**
     * Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
