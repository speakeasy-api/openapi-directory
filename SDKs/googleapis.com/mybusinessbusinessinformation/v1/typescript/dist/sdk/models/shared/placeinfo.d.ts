import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines an area that's represented by a place ID.
 */
export declare class PlaceInfo extends SpeakeasyBase {
    /**
     * Required. The ID of the place. Must correspond to a region. (https://developers.google.com/places/web-service/supported_types#table3)
     */
    placeId?: string;
    /**
     * Required. The localized name of the place. For example, `Scottsdale, AZ`.
     */
    placeName?: string;
}
