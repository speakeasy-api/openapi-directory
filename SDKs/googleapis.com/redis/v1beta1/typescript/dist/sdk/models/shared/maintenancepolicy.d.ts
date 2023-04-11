import { SpeakeasyBase } from "../../../internal/utils";
import { WeeklyMaintenanceWindow, WeeklyMaintenanceWindowInput } from "./weeklymaintenancewindow";
/**
 * Maintenance policy for an instance.
 */
export declare class MaintenancePolicyInput extends SpeakeasyBase {
    /**
     * Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     */
    description?: string;
    /**
     * Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one.
     */
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindowInput[];
}
/**
 * Maintenance policy for an instance.
 */
export declare class MaintenancePolicy extends SpeakeasyBase {
    /**
     * Output only. The time when the policy was created.
     */
    createTime?: string;
    /**
     * Optional. Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     */
    description?: string;
    /**
     * Output only. The time when the policy was last updated.
     */
    updateTime?: string;
    /**
     * Optional. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_window is expected to be one.
     */
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
