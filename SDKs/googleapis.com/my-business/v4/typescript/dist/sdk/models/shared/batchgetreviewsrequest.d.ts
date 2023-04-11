import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Reviews.BatchGetReviews.
 */
export declare class BatchGetReviewsRequest extends SpeakeasyBase {
    /**
     * Whether to ignore rating-only reviews.
     */
    ignoreRatingOnlyReviews?: boolean;
    /**
     * A collection of locations to fetch reviews for, specified by their names.
     */
    locationNames?: string[];
    /**
     * Optional. Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to `update_time desc`. Valid orders to sort by are `rating`, `rating desc` and `update_time desc`. `rating` will return reviews in ascending order. `update_time`(i.e. ascending order) is not supported.
     */
    orderBy?: string;
    /**
     * How many reviews to fetch per page. The default value is 200.
     */
    pageSize?: number;
    /**
     * If specified, it fetches the next page of reviews.
     */
    pageToken?: string;
}
