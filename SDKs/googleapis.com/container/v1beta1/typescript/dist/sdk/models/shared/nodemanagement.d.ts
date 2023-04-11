import { SpeakeasyBase } from "../../../internal/utils";
import { AutoUpgradeOptions } from "./autoupgradeoptions";
/**
 * NodeManagement defines the set of node management services turned on for the node pool.
 */
export declare class NodeManagement extends SpeakeasyBase {
    /**
     * Whether the nodes will be automatically repaired.
     */
    autoRepair?: boolean;
    /**
     * Whether the nodes will be automatically upgraded.
     */
    autoUpgrade?: boolean;
    /**
     * AutoUpgradeOptions defines the set of options for the user to control how the Auto Upgrades will proceed.
     */
    upgradeOptions?: AutoUpgradeOptions;
}
