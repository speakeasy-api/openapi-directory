import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * Time window specified for daily maintenance operations. GCE's internal maintenance will be performed within this window.
 */
export declare class NodeGroupMaintenanceWindow extends SpeakeasyBase {
    /**
     * [Output only] A predetermined duration for the window, automatically chosen to be the smallest possible in the given scenario.
     */
    duration?: string;
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    maintenanceDuration?: Duration;
    /**
     * Start time of the window. This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. For example, both 13:00-5 and 08:00 are valid.
     */
    startTime?: string;
}
