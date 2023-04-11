import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Immutable. The type of location. All locations in the list will share this type.
 */
export declare enum LocationListLocationTypeEnum {
    TargetingLocationTypeUnspecified = "TARGETING_LOCATION_TYPE_UNSPECIFIED",
    TargetingLocationTypeProximity = "TARGETING_LOCATION_TYPE_PROXIMITY",
    TargetingLocationTypeRegional = "TARGETING_LOCATION_TYPE_REGIONAL"
}
/**
 * A list of locations used for targeting.
 */
export declare class LocationListInput extends SpeakeasyBase {
    /**
     * Required. Immutable. The unique ID of the advertiser the location list belongs to.
     */
    advertiserId?: string;
    /**
     * Required. The display name of the location list. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Required. Immutable. The type of location. All locations in the list will share this type.
     */
    locationType?: LocationListLocationTypeEnum;
}
/**
 * A list of locations used for targeting.
 */
export declare class LocationList extends SpeakeasyBase {
    /**
     * Required. Immutable. The unique ID of the advertiser the location list belongs to.
     */
    advertiserId?: string;
    /**
     * Required. The display name of the location list. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Output only. The unique ID of the location list. Assigned by the system.
     */
    locationListId?: string;
    /**
     * Required. Immutable. The type of location. All locations in the list will share this type.
     */
    locationType?: LocationListLocationTypeEnum;
    /**
     * Output only. The resource name of the location list.
     */
    name?: string;
}
