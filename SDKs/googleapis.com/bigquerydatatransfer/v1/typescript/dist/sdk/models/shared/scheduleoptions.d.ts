import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options customizing the data transfer schedule.
 */
export declare class ScheduleOptions extends SpeakeasyBase {
    /**
     * If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored.
     */
    disableAutoScheduling?: boolean;
    /**
     * Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.
     */
    endTime?: string;
    /**
     * Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be trigerred manually is not limited by this option.
     */
    startTime?: string;
}
