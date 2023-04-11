import { SpeakeasyBase } from "../../../internal/utils";
import { Interval } from "./interval";
/**
 * Defines the policy of the QueuedRequest.
 */
export declare class QueueingPolicy extends SpeakeasyBase {
    /**
     * A relative time after which resources may be created.
     */
    validAfterDuration?: string;
    /**
     * An absolute time at which resources may be created.
     */
    validAfterTime?: string;
    /**
     * Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.
     */
    validInterval?: Interval;
    /**
     * A relative time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed.
     */
    validUntilDuration?: string;
    /**
     * An absolute time after which resources should not be created. If the request cannot be fulfilled by this time the request will be failed.
     */
    validUntilTime?: string;
}
