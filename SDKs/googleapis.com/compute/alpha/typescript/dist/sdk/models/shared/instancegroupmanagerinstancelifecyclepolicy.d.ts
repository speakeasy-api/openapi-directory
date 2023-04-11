import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal } from "./instancegroupmanagerinstancelifecyclepolicymetadatabasedreadinesssignal";
/**
 * Defines behaviour for all instance or failures
 */
export declare enum InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum {
    DoNothing = "DO_NOTHING",
    Repair = "REPAIR"
}
/**
 * A bit indicating whether to forcefully apply the group's latest configuration when repairing a VM. Valid options are: - NO (default): If configuration updates are available, they are not forcefully applied during repair. Instead, configuration updates are applied according to the group's update policy. - YES: If configuration updates are available, they are applied during repair.
 */
export declare enum InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum {
    No = "NO",
    Yes = "YES"
}
export declare class InstanceGroupManagerInstanceLifecyclePolicy extends SpeakeasyBase {
    /**
     * Defines behaviour for all instance or failures
     */
    defaultActionOnFailure?: InstanceGroupManagerInstanceLifecyclePolicyDefaultActionOnFailureEnum;
    /**
     * A bit indicating whether to forcefully apply the group's latest configuration when repairing a VM. Valid options are: - NO (default): If configuration updates are available, they are not forcefully applied during repair. Instead, configuration updates are applied according to the group's update policy. - YES: If configuration updates are available, they are applied during repair.
     */
    forceUpdateOnRepair?: InstanceGroupManagerInstanceLifecyclePolicyForceUpdateOnRepairEnum;
    metadataBasedReadinessSignal?: InstanceGroupManagerInstanceLifecyclePolicyMetadataBasedReadinessSignal;
}
