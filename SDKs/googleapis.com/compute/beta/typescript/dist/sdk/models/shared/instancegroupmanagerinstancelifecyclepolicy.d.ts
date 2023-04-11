import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A bit indicating whether to forcefully apply the group's latest configuration when repairing a VM. Valid options are: - NO (default): If configuration updates are available, they are not forcefully applied during repair. Instead, configuration updates are applied according to the group's update policy. - YES: If configuration updates are available, they are applied during repair.
 */
export declare enum InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum {
    No = "NO",
    Yes = "YES"
}
export declare class InstanceGroupManagerInstanceLifecyclePolicy extends SpeakeasyBase {
    /**
     * A bit indicating whether to forcefully apply the group's latest configuration when repairing a VM. Valid options are: - NO (default): If configuration updates are available, they are not forcefully applied during repair. Instead, configuration updates are applied according to the group's update policy. - YES: If configuration updates are available, they are applied during repair.
     */
    forceUpdateOnRepair?: InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
}
