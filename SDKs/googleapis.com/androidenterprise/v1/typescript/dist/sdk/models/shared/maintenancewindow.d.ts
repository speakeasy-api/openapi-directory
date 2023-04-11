import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Maintenance window for managed Google Play Accounts. This allows Play store to update the apps on the foreground in the designated window.
 */
export declare class MaintenanceWindow extends SpeakeasyBase {
    /**
     * Duration of the maintenance window, in milliseconds. The duration must be between 30 minutes and 24 hours (inclusive).
     */
    durationMs?: string;
    /**
     * Start time of the maintenance window, in milliseconds after midnight on the device. Windows can span midnight.
     */
    startTimeAfterMidnightMs?: string;
}
