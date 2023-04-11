import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Targeting details for negative keyword list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_NEGATIVE_KEYWORD_LIST`.
 */
export declare class NegativeKeywordListAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * Required. ID of the negative keyword list. Should refer to the negative_keyword_list_id field of a NegativeKeywordList resource.
     */
    negativeKeywordListId?: string;
}
