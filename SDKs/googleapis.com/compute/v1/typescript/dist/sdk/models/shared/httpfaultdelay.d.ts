import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * Specifies the delay introduced by the load balancer before forwarding the request to the backend service as part of fault injection.
 */
export declare class HttpFaultDelay extends SpeakeasyBase {
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    fixedDelay?: Duration;
    /**
     * The percentage of traffic for connections, operations, or requests for which a delay is introduced as part of fault injection. The value must be from 0.0 to 100.0 inclusive.
     */
    percentage?: number;
}
