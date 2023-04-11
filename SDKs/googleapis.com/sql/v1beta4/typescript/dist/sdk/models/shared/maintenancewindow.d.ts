import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Maintenance timing setting: `canary` (Earlier) or `stable` (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen).
 */
export declare enum MaintenanceWindowUpdateTrackEnum {
    SqlUpdateTrackUnspecified = "SQL_UPDATE_TRACK_UNSPECIFIED",
    Canary = "canary",
    Stable = "stable"
}
/**
 * Maintenance window. This specifies when a Cloud SQL instance is restarted for system maintenance purposes.
 */
export declare class MaintenanceWindow extends SpeakeasyBase {
    /**
     * day of week (1-7), starting on Monday.
     */
    day?: number;
    /**
     * hour of day - 0 to 23.
     */
    hour?: number;
    /**
     * This is always `sql#maintenanceWindow`.
     */
    kind?: string;
    /**
     * Maintenance timing setting: `canary` (Earlier) or `stable` (Later). [Learn more](https://cloud.google.com/sql/docs/mysql/instance-settings#maintenance-timing-2ndgen).
     */
    updateTrack?: MaintenanceWindowUpdateTrackEnum;
}
