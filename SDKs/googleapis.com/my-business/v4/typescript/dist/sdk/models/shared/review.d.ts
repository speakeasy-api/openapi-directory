import { SpeakeasyBase } from "../../../internal/utils";
import { Reviewer } from "./reviewer";
import { ReviewReply } from "./reviewreply";
/**
 * The star rating of the review.
 */
export declare enum ReviewStarRatingEnum {
    StarRatingUnspecified = "STAR_RATING_UNSPECIFIED",
    One = "ONE",
    Two = "TWO",
    Three = "THREE",
    Four = "FOUR",
    Five = "FIVE"
}
/**
 * Output only. Represents a review for a location.
 */
export declare class Review extends SpeakeasyBase {
    /**
     * The body of the review as plain text with markups.
     */
    comment?: string;
    /**
     * The timestamp for when the review was written.
     */
    createTime?: string;
    /**
     * The resource name. For Review it is of the form `accounts/{account_id}/locations/{location_id}/reviews/{review_id}`
     */
    name?: string;
    /**
     * The encrypted unique identifier.
     */
    reviewId?: string;
    /**
     * Represents the location owner/manager's reply to a review.
     */
    reviewReply?: ReviewReply;
    /**
     * Represents the author of the review.
     */
    reviewer?: Reviewer;
    /**
     * The star rating of the review.
     */
    starRating?: ReviewStarRatingEnum;
    /**
     * The timestamp for when the review was last modified.
     */
    updateTime?: string;
}
