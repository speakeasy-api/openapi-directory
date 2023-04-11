import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * Queuing parameters for the requested deferred capacity.
 */
export declare class QueuingPolicy extends SpeakeasyBase {
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    validUntilDuration?: Duration;
    /**
     * Absolute deadline for waiting for capacity in RFC3339 text format.
     */
    validUntilTime?: string;
}
