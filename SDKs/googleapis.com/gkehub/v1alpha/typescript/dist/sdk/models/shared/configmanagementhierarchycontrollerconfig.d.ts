import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for Hierarchy Controller
 */
export declare class ConfigManagementHierarchyControllerConfig extends SpeakeasyBase {
    /**
     * Whether hierarchical resource quota is enabled in this cluster.
     */
    enableHierarchicalResourceQuota?: boolean;
    /**
     * Whether pod tree labels are enabled in this cluster.
     */
    enablePodTreeLabels?: boolean;
    /**
     * Whether Hierarchy Controller is enabled in this cluster.
     */
    enabled?: boolean;
}
