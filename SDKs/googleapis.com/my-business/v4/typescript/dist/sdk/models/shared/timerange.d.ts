import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A range of time. Data will be pulled over the range as a half-open inverval (that is, [start_time, end_time)).
 */
export declare class TimeRange extends SpeakeasyBase {
    /**
     * Epoch timestamp for the end of the range (exclusive).
     */
    endTime?: string;
    /**
     * Epoch timestamp for the start of the range (inclusive).
     */
    startTime?: string;
}
