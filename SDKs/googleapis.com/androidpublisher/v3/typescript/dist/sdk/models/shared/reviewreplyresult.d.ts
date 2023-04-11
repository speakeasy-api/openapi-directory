import { SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
/**
 * The result of replying/updating a reply to review.
 */
export declare class ReviewReplyResult extends SpeakeasyBase {
    /**
     * A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.
     */
    lastEdited?: Timestamp;
    /**
     * The reply text that was applied.
     */
    replyText?: string;
}
