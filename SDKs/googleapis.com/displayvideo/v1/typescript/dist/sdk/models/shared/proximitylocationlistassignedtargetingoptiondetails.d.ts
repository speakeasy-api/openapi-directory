import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Radius range for proximity location list. This represents the size of the area around a chosen location that will be targeted. `All` proximity location targeting under a single resource must have the same radius range value. Set this value to match any existing targeting. If updated, this field will change the radius range for all proximity targeting under the resource.
 */
export declare enum ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum {
    ProximityRadiusRangeUnspecified = "PROXIMITY_RADIUS_RANGE_UNSPECIFIED",
    ProximityRadiusRangeSmall = "PROXIMITY_RADIUS_RANGE_SMALL",
    ProximityRadiusRangeMedium = "PROXIMITY_RADIUS_RANGE_MEDIUM",
    ProximityRadiusRangeLarge = "PROXIMITY_RADIUS_RANGE_LARGE"
}
/**
 * Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.
 */
export declare class ProximityLocationListAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. ID of the proximity location list. Should refer to the location_list_id field of a LocationList resource whose type is `TARGETING_LOCATION_TYPE_PROXIMITY`.
     */
    proximityLocationListId?: string;
    /**
     * Required. Radius range for proximity location list. This represents the size of the area around a chosen location that will be targeted. `All` proximity location targeting under a single resource must have the same radius range value. Set this value to match any existing targeting. If updated, this field will change the radius range for all proximity targeting under the resource.
     */
    proximityRadiusRange?: ProximityLocationListAssignedTargetingOptionDetailsProximityRadiusRangeEnum;
}
