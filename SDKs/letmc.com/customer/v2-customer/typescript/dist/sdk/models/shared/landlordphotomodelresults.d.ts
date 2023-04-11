import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordPhotoModel } from "./landlordphotomodel";
/**
 * Holds results from a paged query returning LandlordPhotoModel values
 */
export declare class LandlordPhotoModelResults extends SpeakeasyBase {
    /**
     * The total number of results available for all pages
     */
    count?: number;
    /**
     * The resulting data returned from the paged query range
     */
    data?: LandlordPhotoModel[];
}
