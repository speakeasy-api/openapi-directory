import { SpeakeasyBase } from "../../../internal/utils";
import { Review } from "./review";
/**
 * Represents a review with location information.
 */
export declare class LocationReview extends SpeakeasyBase {
    /**
     * Location resource name.
     */
    name?: string;
    /**
     * Output only. Represents a review for a location.
     */
    review?: Review;
}
