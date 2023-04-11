import { SpeakeasyBase } from "../../../internal/utils";
import { ReviewReplyResult } from "./reviewreplyresult";
/**
 * Response on status of replying to a review.
 */
export declare class ReviewsReplyResponse extends SpeakeasyBase {
    /**
     * The result of replying/updating a reply to review.
     */
    result?: ReviewReplyResult;
}
