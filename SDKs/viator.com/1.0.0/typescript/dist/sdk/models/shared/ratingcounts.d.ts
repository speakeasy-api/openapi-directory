import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
 *
 * @remarks
 *
 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
 *
 * - **note**: see response sample for structure
 *
 */
export declare class RatingCounts extends SpeakeasyBase {
    /**
     * Number of reviews with a one star rating
     */
    one?: number;
    /**
     * Number of reviews with a two star rating
     */
    two?: number;
    /**
     * Number of reviews with a three star rating
     */
    three?: number;
    /**
     * Number of reviews with a four star rating
     */
    four?: number;
    /**
     * Number of reviews with a five star rating
     */
    five?: number;
}
