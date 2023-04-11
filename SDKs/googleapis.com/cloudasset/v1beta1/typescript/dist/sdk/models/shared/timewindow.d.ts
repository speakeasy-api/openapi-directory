import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A time window specified by its `start_time` and `end_time`.
 */
export declare class TimeWindow extends SpeakeasyBase {
    /**
     * End time of the time window (inclusive). If not specified, the current timestamp is used instead.
     */
    endTime?: string;
    /**
     * Start time of the time window (exclusive).
     */
    startTime?: string;
}
