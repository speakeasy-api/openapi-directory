import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Represents a location that was modified by Google.
 */
export declare class GoogleUpdatedLocation extends SpeakeasyBase {
    /**
     * The fields that Google updated.
     */
    diffMask?: string;
    /**
     * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
     */
    location?: Location;
}
