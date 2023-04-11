import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
export declare class FutureReservationTimeWindow extends SpeakeasyBase {
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    duration?: Duration;
    endTime?: string;
    /**
     * Start time of the Future Reservation. The start_time is an RFC3339 string.
     */
    startTime?: string;
}
