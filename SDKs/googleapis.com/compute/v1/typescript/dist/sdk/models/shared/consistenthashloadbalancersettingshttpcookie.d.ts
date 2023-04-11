import { SpeakeasyBase } from "../../../internal/utils";
import { Duration } from "./duration";
/**
 * The information about the HTTP Cookie on which the hash function is based for load balancing policies that use a consistent hash.
 */
export declare class ConsistentHashLoadBalancerSettingsHttpCookie extends SpeakeasyBase {
    /**
     * Name of the cookie.
     */
    name?: string;
    /**
     * Path to set for the cookie.
     */
    path?: string;
    /**
     * A Duration represents a fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". Range is approximately 10,000 years.
     */
    ttl?: Duration;
}
