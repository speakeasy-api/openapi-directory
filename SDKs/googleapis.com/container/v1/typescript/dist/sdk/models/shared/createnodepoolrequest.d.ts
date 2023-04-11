import { SpeakeasyBase } from "../../../internal/utils";
import { NodePool } from "./nodepool";
/**
 * CreateNodePoolRequest creates a node pool for a cluster.
 */
export declare class CreateNodePoolRequest extends SpeakeasyBase {
    /**
     * Deprecated. The name of the cluster. This field has been deprecated and replaced by the parent field.
     */
    clusterId?: string;
    /**
     * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
     */
    nodePool?: NodePool;
    /**
     * The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/* /locations/* /clusters/*`.
     */
    parent?: string;
    /**
     * Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the parent field.
     */
    projectId?: string;
    /**
     * Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the parent field.
     */
    zone?: string;
}
