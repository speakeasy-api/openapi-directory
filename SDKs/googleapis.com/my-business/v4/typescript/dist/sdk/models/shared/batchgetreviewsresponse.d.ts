import { SpeakeasyBase } from "../../../internal/utils";
import { LocationReview } from "./locationreview";
/**
 * Response message for Reviews.BatchGetReviews.
 */
export declare class BatchGetReviewsResponse extends SpeakeasyBase {
    /**
     * Reviews with location information.
     */
    locationReviews?: LocationReview[];
    /**
     * If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent calls. If there are no more reviews, this field will not be present in the response.
     */
    nextPageToken?: string;
}
