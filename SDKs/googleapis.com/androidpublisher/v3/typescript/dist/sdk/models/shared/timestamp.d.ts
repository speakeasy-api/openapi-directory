import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
 */
export declare class Timestamp extends SpeakeasyBase {
    /**
     * Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive.
     */
    nanos?: number;
    /**
     * Represents seconds of UTC time since Unix epoch.
     */
    seconds?: string;
}
