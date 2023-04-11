import { SpeakeasyBase } from "../../../internal/utils";
import { AutoUpgradeOptions } from "./autoupgradeoptions";
/**
 * NodeManagement defines the set of node management services turned on for the node pool.
 */
export declare class NodeManagement extends SpeakeasyBase {
    /**
     * A flag that specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
     */
    autoRepair?: boolean;
    /**
     * A flag that specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
     */
    autoUpgrade?: boolean;
    /**
     * AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
     */
    upgradeOptions?: AutoUpgradeOptions;
}
