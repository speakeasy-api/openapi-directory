import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
 */
export declare class AssignedLocation extends SpeakeasyBase {
    /**
     * Output only. The unique ID of the assigned location. The ID is only unique within a location list. It may be reused in other contexts.
     */
    assignedLocationId?: string;
    /**
     * Output only. The resource name of the assigned location.
     */
    name?: string;
    /**
     * Required. The ID of the targeting option assigned to the location list. Must be of type TARGETING_TYPE_GEO_REGION.
     */
    targetingOptionId?: string;
}
/**
 * An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
 */
export declare class AssignedLocationInput extends SpeakeasyBase {
    /**
     * Required. The ID of the targeting option assigned to the location list. Must be of type TARGETING_TYPE_GEO_REGION.
     */
    targetingOptionId?: string;
}
