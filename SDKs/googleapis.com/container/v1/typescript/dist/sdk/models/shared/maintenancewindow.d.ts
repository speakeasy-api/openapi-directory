import { SpeakeasyBase } from "../../../internal/utils";
import { DailyMaintenanceWindow } from "./dailymaintenancewindow";
import { RecurringTimeWindow } from "./recurringtimewindow";
import { TimeWindow } from "./timewindow";
/**
 * MaintenanceWindow defines the maintenance window to be used for the cluster.
 */
export declare class MaintenanceWindow extends SpeakeasyBase {
    /**
     * Time window specified for daily maintenance operations.
     */
    dailyMaintenanceWindow?: DailyMaintenanceWindow;
    /**
     * Exceptions to maintenance window. Non-emergency maintenance should not occur in these windows.
     */
    maintenanceExclusions?: Record<string, TimeWindow>;
    /**
     * Represents an arbitrary window of time that recurs.
     */
    recurringWindow?: RecurringTimeWindow;
}
