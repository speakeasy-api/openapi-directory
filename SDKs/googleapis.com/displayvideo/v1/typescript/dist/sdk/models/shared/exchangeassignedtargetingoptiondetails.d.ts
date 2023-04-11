import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_EXCHANGE`.
 */
export declare class ExchangeAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_EXCHANGE`.
     */
    targetingOptionId?: string;
}
