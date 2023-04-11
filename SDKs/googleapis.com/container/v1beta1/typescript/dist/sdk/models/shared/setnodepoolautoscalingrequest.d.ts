import { SpeakeasyBase } from "../../../internal/utils";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
/**
 * SetNodePoolAutoscalingRequest sets the autoscaler settings of a node pool.
 */
export declare class SetNodePoolAutoscalingRequest extends SpeakeasyBase {
    /**
     * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
     */
    autoscaling?: NodePoolAutoscaling;
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * The name (project, location, cluster, node pool) of the node pool to set autoscaler settings. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`.
     */
    name?: string;
    /**
     * Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
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
