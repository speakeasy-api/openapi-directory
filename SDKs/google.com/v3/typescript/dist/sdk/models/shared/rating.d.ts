import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the rating.
 */
export declare enum RatingTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Overall = "OVERALL"
}
/**
 * A rating within a vacation rentals Listing. NEXT ID: 4
 */
export declare class Rating extends SpeakeasyBase {
    /**
     * Maximum rating possible.
     */
    ratingScale?: number;
    /**
     * The rating score. (e.g. 8.5)
     */
    score?: number;
    /**
     * The type of the rating.
     */
    type?: RatingTypeEnum;
}
