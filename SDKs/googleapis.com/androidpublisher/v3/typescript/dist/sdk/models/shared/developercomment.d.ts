import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
/**
 * Developer entry from conversation between user and developer.
 */
export declare class DeveloperComment extends SpeakeasyBase {
    /**
     * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
     */
    lastModified?: Timestamp;
    /**
     * The content of the comment, i.e. reply body.
     */
    text?: string;
}
