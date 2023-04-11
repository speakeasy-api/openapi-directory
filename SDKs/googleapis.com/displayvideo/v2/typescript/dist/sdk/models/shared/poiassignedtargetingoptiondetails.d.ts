import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The unit of distance by which the targeting radius is measured.
 */
export declare enum PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED",
    DistanceUnitMiles = "DISTANCE_UNIT_MILES",
    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}
/**
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
 */
export declare class PoiAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of a POI, e.g. "Times Square", "Space Needle", followed by its full address if available.
     */
    displayName?: string;
    /**
     * Output only. Latitude of the POI rounding to 6th decimal place.
     */
    latitude?: number;
    /**
     * Output only. Longitude of the POI rounding to 6th decimal place.
     */
    longitude?: number;
    /**
     * Required. The radius of the area around the POI that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`.
     */
    proximityRadiusAmount?: number;
    /**
     * Required. The unit of distance by which the targeting radius is measured.
     */
    proximityRadiusUnit?: PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_POI`. Accepted POI targeting option IDs can be retrieved using SearchTargetingOptions. If targeting a specific latitude/longitude coordinate removed from an address or POI name, you can generate the necessary targeting option ID by rounding the desired coordinate values to the 6th decimal place, removing the decimals, and concatenating the string values separated by a semicolon. For example, you can target the latitude/longitude pair of 40.7414691, -74.003387 using the targeting option ID "40741469;-74003387".
     */
    targetingOptionId?: string;
}
/**
 * Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.
 */
export declare class PoiAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Required. The radius of the area around the POI that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`.
     */
    proximityRadiusAmount?: number;
    /**
     * Required. The unit of distance by which the targeting radius is measured.
     */
    proximityRadiusUnit?: PoiAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_POI`. Accepted POI targeting option IDs can be retrieved using SearchTargetingOptions. If targeting a specific latitude/longitude coordinate removed from an address or POI name, you can generate the necessary targeting option ID by rounding the desired coordinate values to the 6th decimal place, removing the decimals, and concatenating the string values separated by a semicolon. For example, you can target the latitude/longitude pair of 40.7414691, -74.003387 using the targeting option ID "40741469;-74003387".
     */
    targetingOptionId?: string;
}
