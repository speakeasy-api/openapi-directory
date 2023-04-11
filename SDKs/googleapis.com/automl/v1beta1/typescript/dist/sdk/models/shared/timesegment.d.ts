import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A time period inside of an example that has a time dimension (e.g. video).
 */
export declare class TimeSegment extends SpeakeasyBase {
    /**
     * End of the time segment (exclusive), represented as the duration since the example start.
     */
    endTimeOffset?: string;
    /**
     * Start of the time segment (inclusive), represented as the duration since the example start.
     */
    startTimeOffset?: string;
}
