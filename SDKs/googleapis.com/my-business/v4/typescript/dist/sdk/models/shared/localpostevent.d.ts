import { SpeakeasyBase } from "../../../internal/utils";
import { TimeInterval } from "./timeinterval";
/**
 * All the information pertaining to an event featured in a local post.
 */
export declare class LocalPostEvent extends SpeakeasyBase {
    /**
     * An interval of time, inclusive. It must contain all fields to be valid.
     */
    schedule?: TimeInterval;
    /**
     * Name of the event.
     */
    title?: string;
}
