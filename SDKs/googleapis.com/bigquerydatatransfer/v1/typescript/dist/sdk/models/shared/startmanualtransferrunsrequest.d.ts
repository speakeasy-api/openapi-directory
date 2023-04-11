import { SpeakeasyBase } from "../../../internal/utils";
import { TimeRange } from "./timerange";
/**
 * A request to start manual transfer runs.
 */
export declare class StartManualTransferRunsRequest extends SpeakeasyBase {
    /**
     * Specific run_time for a transfer run to be started. The requested_run_time must not be in the future.
     */
    requestedRunTime?: string;
    /**
     * A specification for a time range, this will request transfer runs with run_time between start_time (inclusive) and end_time (exclusive).
     */
    requestedTimeRange?: TimeRange;
}
