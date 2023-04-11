import { SpeakeasyBase } from "../../../internal/utils";
import { WeeklyMaintenanceWindow } from "./weeklymaintenancewindow";
/**
 * Maintenance policy per instance.
 */
export declare class GoogleCloudMemcacheV1MaintenancePolicyInput extends SpeakeasyBase {
    /**
     * Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     */
    description?: string;
    /**
     * Required. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_windows is expected to be one.
     */
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
/**
 * Maintenance policy per instance.
 */
export declare class GoogleCloudMemcacheV1MaintenancePolicy extends SpeakeasyBase {
    /**
     * Output only. The time when the policy was created.
     */
    createTime?: string;
    /**
     * Description of what this policy is for. Create/Update methods return INVALID_ARGUMENT if the length is greater than 512.
     */
    description?: string;
    /**
     * Output only. The time when the policy was updated.
     */
    updateTime?: string;
    /**
     * Required. Maintenance window that is applied to resources covered by this policy. Minimum 1. For the current version, the maximum number of weekly_maintenance_windows is expected to be one.
     */
    weeklyMaintenanceWindow?: WeeklyMaintenanceWindow[];
}
