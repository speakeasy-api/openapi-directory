import { SpeakeasyBase } from "../../../internal/utils";
import { NodeManagement } from "./nodemanagement";
/**
 * SetNodePoolManagementRequest sets the node management properties of a node pool.
 */
export declare class SetNodePoolManagementRequest extends SpeakeasyBase {
    /**
     * Required. Deprecated. The name of the cluster to update. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * NodeManagement defines the set of node management services turned on for the node pool.
     */
    management?: NodeManagement;
    /**
     * The name (project, location, cluster, node pool id) of the node pool to set management properties. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`.
     */
    name?: string;
    /**
     * Required. Deprecated. The name of the node pool to update. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
