import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details for assigned sub-exchange targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_SUB_EXCHANGE`.
 */
export declare class SubExchangeAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. The targeting_option_id of a TargetingOption of type `TARGETING_TYPE_SUB_EXCHANGE`.
     */
    targetingOptionId?: string;
}
