import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scan schedule configuration.
 */
export declare class Schedule extends SpeakeasyBase {
    /**
     * Required. The duration of time between executions in days.
     */
    intervalDurationDays?: number;
    /**
     * A timestamp indicates when the next run will be scheduled. The value is refreshed by the server after each run. If unspecified, it will default to current server time, which means the scan will be scheduled to start immediately.
     */
    scheduleTime?: string;
}
