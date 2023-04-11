import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
 */
export declare class GoogleLocation extends SpeakeasyBase {
    /**
     * A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.
     */
    location?: Location;
    /**
     * Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`.
     */
    name?: string;
    /**
     * A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user.
     */
    requestAdminRightsUri?: string;
}
