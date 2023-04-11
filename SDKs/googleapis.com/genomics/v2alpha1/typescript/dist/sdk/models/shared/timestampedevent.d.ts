import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An event that occured in the operation assigned to the worker and the time of occurance.
 */
export declare class TimestampedEvent extends SpeakeasyBase {
    /**
     * The event data.
     */
    data?: Record<string, any>;
    /**
     * The time when the event happened.
     */
    timestamp?: string;
}
