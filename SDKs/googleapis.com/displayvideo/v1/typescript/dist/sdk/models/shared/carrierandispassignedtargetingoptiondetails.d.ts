import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
 */
export declare class CarrierAndIspAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Output only. The display name of the carrier or ISP.
     */
    displayName?: string;
    /**
     * Indicates if this option is being negatively targeted. All assigned carrier and ISP targeting options on the same resource must have the same value for this field.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_CARRIER_AND_ISP`.
     */
    targetingOptionId?: string;
}
/**
 * Details for assigned carrier and ISP targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_CARRIER_AND_ISP`.
 */
export declare class CarrierAndIspAssignedTargetingOptionDetailsInput extends SpeakeasyBase {
    /**
     * Indicates if this option is being negatively targeted. All assigned carrier and ISP targeting options on the same resource must have the same value for this field.
     */
    negative?: boolean;
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_CARRIER_AND_ISP`.
     */
    targetingOptionId?: string;
}
