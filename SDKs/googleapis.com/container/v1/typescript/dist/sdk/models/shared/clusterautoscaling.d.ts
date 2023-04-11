import { SpeakeasyBase } from "../../../internal/utils";
import { AutoprovisioningNodePoolDefaults } from "./autoprovisioningnodepooldefaults";
import { ResourceLimit } from "./resourcelimit";
/**
 * Defines autoscaling behaviour.
 */
export declare enum ClusterAutoscalingAutoscalingProfileEnum {
    ProfileUnspecified = "PROFILE_UNSPECIFIED",
    OptimizeUtilization = "OPTIMIZE_UTILIZATION",
    Balanced = "BALANCED"
}
/**
 * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
 */
export declare class ClusterAutoscaling extends SpeakeasyBase {
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes can be created by NAP.
     */
    autoprovisioningLocations?: string[];
    /**
     * AutoprovisioningNodePoolDefaults contains defaults for a node pool created by NAP.
     */
    autoprovisioningNodePoolDefaults?: AutoprovisioningNodePoolDefaults;
    /**
     * Defines autoscaling behaviour.
     */
    autoscalingProfile?: ClusterAutoscalingAutoscalingProfileEnum;
    /**
     * Enables automatic node pool creation and deletion.
     */
    enableNodeAutoprovisioning?: boolean;
    /**
     * Contains global constraints regarding minimum and maximum amount of resources in the cluster.
     */
    resourceLimits?: ResourceLimit[];
}
