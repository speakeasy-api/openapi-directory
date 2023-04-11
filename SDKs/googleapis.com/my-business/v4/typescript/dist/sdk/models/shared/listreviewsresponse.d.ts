import { SpeakeasyBase } from "../../../internal/utils";
import { Review } from "./review";
/**
 * Response message for Reviews.ListReviews.
 */
export declare class ListReviewsResponse extends SpeakeasyBase {
    /**
     * The average star rating of all reviews for this location on a scale of 1 to 5, where 5 is the highest rating.
     */
    averageRating?: number;
    /**
     * If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent call to ListReviews. If there are no more reviews, this field is not present in the response.
     */
    nextPageToken?: string;
    /**
     * The reviews.
     */
    reviews?: Review[];
    /**
     * The total number of reviews for this location.
     */
    totalReviewCount?: number;
}
