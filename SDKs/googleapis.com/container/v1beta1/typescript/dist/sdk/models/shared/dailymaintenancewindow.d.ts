import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Time window specified for daily maintenance operations.
 */
export declare class DailyMaintenanceWindow extends SpeakeasyBase {
    /**
     * [Output only] Duration of the time window, automatically chosen to be smallest possible in the given scenario.
     */
    duration?: string;
    /**
     * Time within the maintenance window to start the maintenance operations. It must be in format "HH:MM", where HH : [00-23] and MM : [00-59] GMT.
     */
    startTime?: string;
}
