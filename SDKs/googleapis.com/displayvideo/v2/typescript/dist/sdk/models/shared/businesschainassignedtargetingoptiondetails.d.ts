import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The unit of distance by which the targeting radius is measured.
 */
export declare enum BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum {
    DistanceUnitUnspecified = "DISTANCE_UNIT_UNSPECIFIED",
    DistanceUnitMiles = "DISTANCE_UNIT_MILES",
    DistanceUnitKilometers = "DISTANCE_UNIT_KILOMETERS"
}
/**
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
 */
export declare class BusinessChainAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of a business chain, e.g. "KFC", "Chase Bank".
     */
    displayName?: string;
    /**
     * Required. The radius of the area around the business chain that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. The minimum increment for both cases is 0.1. Inputs will be rounded to the nearest acceptable value if it is too granular, e.g. 15.57 will become 15.6.
     */
    proximityRadiusAmount?: number;
    /**
     * Required. The unit of distance by which the targeting radius is measured.
     */
    proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BUSINESS_CHAIN`. Accepted business chain targeting option IDs can be retrieved using SearchTargetingOptions.
     */
    targetingOptionId?: string;
}
/**
 * Details for assigned Business chain targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_BUSINESS_CHAIN`.
 */
export declare class BusinessChainAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Required. The radius of the area around the business chain that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is `DISTANCE_UNIT_KILOMETERS` and 1 to 500 if unit is `DISTANCE_UNIT_MILES`. The minimum increment for both cases is 0.1. Inputs will be rounded to the nearest acceptable value if it is too granular, e.g. 15.57 will become 15.6.
     */
    proximityRadiusAmount?: number;
    /**
     * Required. The unit of distance by which the targeting radius is measured.
     */
    proximityRadiusUnit?: BusinessChainAssignedTargetingOptionDetailsProximityRadiusUnitEnum;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_BUSINESS_CHAIN`. Accepted business chain targeting option IDs can be retrieved using SearchTargetingOptions.
     */
    targetingOptionId?: string;
}
