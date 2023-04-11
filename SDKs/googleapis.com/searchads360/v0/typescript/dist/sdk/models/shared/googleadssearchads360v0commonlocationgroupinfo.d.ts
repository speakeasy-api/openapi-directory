import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations.
 */
export declare enum GoogleAdsSearchads360V0CommonLocationGroupInfoRadiusUnitsEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    Meters = "METERS",
    Miles = "MILES",
    MilliMiles = "MILLI_MILES"
}
/**
 * A radius around a list of locations specified through a feed.
 */
export declare class GoogleAdsSearchads360V0CommonLocationGroupInfo extends SpeakeasyBase {
    /**
     * FeedItemSets whose FeedItems are targeted. If multiple IDs are specified, then all items that appear in at least one set are targeted. This field cannot be used with geo_target_constants. This is optional and can only be set in CREATE operations.
     */
    feedItemSets?: string[];
    /**
     * Geo target constant(s) restricting the scope of the geographic area within the feed. Currently only one geo target constant is allowed.
     */
    geoTargetConstants?: string[];
    /**
     * Distance in units specifying the radius around targeted locations. This is required and must be set in CREATE operations.
     */
    radius?: string;
    /**
     * Unit of the radius. Miles and meters are supported for geo target constants. Milli miles and meters are supported for feed item sets. This is required and must be set in CREATE operations.
     */
    radiusUnits?: GoogleAdsSearchads360V0CommonLocationGroupInfoRadiusUnitsEnum;
}
