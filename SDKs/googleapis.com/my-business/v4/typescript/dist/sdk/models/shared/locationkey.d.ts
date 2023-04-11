import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Alternate/surrogate key references for a location.
 */
export declare class LocationKey extends SpeakeasyBase {
    /**
     * Output only. A value of true indicates that an unset place ID is deliberate, which is different from no association being made yet.
     */
    explicitNoPlaceId?: boolean;
    /**
     * If this location has been verified and is connected to/appears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. If this location is unverified, this field may be populated if the location has been associated with a place that appears on Google Maps. This field can be set during Create calls, but not for Update. The additional `explicit_no_place_id` bool qualifies whether an unset place ID is deliberate or not.
     */
    placeId?: string;
    /**
     * Output only. If this location has a Google+ page associated with it, this is populated with the Google+ page ID for this location.
     */
    plusPageId?: string;
    /**
     * Output only. The `request_id` used to create this location. May be empty if this location was created outside of the Google My Business API or Business Profile Locations.
     */
    requestId?: string;
}
