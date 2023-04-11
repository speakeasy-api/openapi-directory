import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The rating of a Product.
 */
export declare class GoogleCloudRetailV2betaRating extends SpeakeasyBase {
    /**
     * The average rating of the Product. The rating is scaled at 1-5. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    averageRating?: number;
    /**
     * The total number of ratings. This value is independent of the value of rating_histogram. This value must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.
     */
    ratingCount?: number;
    /**
     * List of rating counts per rating value (index = rating - 1). The list is empty if there is no rating. If the list is non-empty, its size is always 5. Otherwise, an INVALID_ARGUMENT error is returned. For example, [41, 14, 13, 47, 303]. It means that the Product got 41 ratings with 1 star, 14 ratings with 2 star, and so on.
     */
    ratingHistogram?: number[];
}
