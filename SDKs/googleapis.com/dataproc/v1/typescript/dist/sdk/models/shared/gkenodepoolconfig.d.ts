import { SpeakeasyBase } from "../../../internal/utils";
import { GkeNodeConfig } from "./gkenodeconfig";
import { GkeNodePoolAutoscalingConfig } from "./gkenodepoolautoscalingconfig";
/**
 * The configuration of a GKE node pool used by a Dataproc-on-GKE cluster (https://cloud.google.com/dataproc/docs/concepts/jobs/dataproc-gke#create-a-dataproc-on-gke-cluster).
 */
export declare class GkeNodePoolConfig extends SpeakeasyBase {
    /**
     * GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
     */
    autoscaling?: GkeNodePoolAutoscalingConfig;
    /**
     * Parameters that describe cluster nodes.
     */
    config?: GkeNodeConfig;
    /**
     * Optional. The list of Compute Engine zones (https://cloud.google.com/compute/docs/zones#available) where node pool nodes associated with a Dataproc on GKE virtual cluster will be located.Note: All node pools associated with a virtual cluster must be located in the same region as the virtual cluster, and they must be located in the same zone within that region.If a location is not specified during node pool creation, Dataproc on GKE will choose the zone.
     */
    locations?: string[];
}
