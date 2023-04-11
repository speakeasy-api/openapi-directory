import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics value that holds number of executions counted.
 */
export declare class MetricsValue extends SpeakeasyBase {
    /**
     * Required field indicating the end time of the interval.
     */
    endTime?: string;
    /**
     * Required field indicating the start time of the interval.
     */
    startTime?: string;
    /**
     * Indicates the number of executions counted.
     */
    value?: string;
}
