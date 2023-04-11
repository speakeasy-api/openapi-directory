import { SpeakeasyBase } from "../../../internal/utils";
import { Duplicate } from "./duplicate";
/**
 * Additional non-user-editable information about the location.
 */
export declare class Metadata extends SpeakeasyBase {
    /**
     * Information about the location that this location duplicates.
     */
    duplicate?: Duplicate;
    /**
     * A link to the location on Maps.
     */
    mapsUrl?: string;
    /**
     * A link to the page on Google Search where a customer can leave a review for the location.
     */
    newReviewUrl?: string;
}
