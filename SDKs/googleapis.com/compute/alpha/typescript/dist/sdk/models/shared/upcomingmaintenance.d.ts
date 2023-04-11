import { SpeakeasyBase } from "../../../internal/utils";
import { UpcomingMaintenanceTimeWindow } from "./upcomingmaintenancetimewindow";
export declare enum UpcomingMaintenanceMaintenanceStatusEnum {
    Ongoing = "ONGOING",
    Pending = "PENDING",
    Unknown = "UNKNOWN"
}
/**
 * Defines the type of maintenance.
 */
export declare enum UpcomingMaintenanceTypeEnum {
    Scheduled = "SCHEDULED",
    UnknownType = "UNKNOWN_TYPE",
    Unscheduled = "UNSCHEDULED"
}
/**
 * Upcoming Maintenance notification information.
 */
export declare class UpcomingMaintenance extends SpeakeasyBase {
    /**
     * Indicates if the maintenance can be customer triggered. From more detail, see go/sf-ctm-design.
     */
    canReschedule?: boolean;
    /**
     * [Output Only] The date when the maintenance will take place. This value is in RFC3339 text format. DEPRECATED: Use window_start_time instead.
     */
    date?: string;
    /**
     * The latest time for the planned maintenance window to start. This timestamp value is in RFC3339 text format.
     */
    latestWindowStartTime?: string;
    maintenanceStatus?: UpcomingMaintenanceMaintenanceStatusEnum;
    /**
     * Represents a window of time using two timestamps: `earliest` and `latest`. This timestamp values are in RFC3339 text format.
     */
    startTimeWindow?: UpcomingMaintenanceTimeWindow;
    /**
     * [Output Only] The time when the maintenance will take place. This value is in RFC3339 text format. DEPRECATED: Use window_start_time instead.
     */
    time?: string;
    /**
     * Defines the type of maintenance.
     */
    type?: UpcomingMaintenanceTypeEnum;
    /**
     * The time by which the maintenance disruption will be completed. This timestamp value is in RFC3339 text format.
     */
    windowEndTime?: string;
    /**
     * The current start time of the maintenance window. This timestamp value is in RFC3339 text format.
     */
    windowStartTime?: string;
}
