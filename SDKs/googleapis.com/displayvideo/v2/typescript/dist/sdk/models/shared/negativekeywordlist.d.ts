import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of negative keywords used for targeting.
 */
export declare class NegativeKeywordListInput extends SpeakeasyBase {
    /**
     * Required. The display name of the negative keyword list. Must be UTF-8 encoded with a maximum size of 255 bytes.
     */
    displayName?: string;
}
/**
 * A list of negative keywords used for targeting.
 */
export declare class NegativeKeywordList extends SpeakeasyBase {
    /**
     * Output only. The unique ID of the advertiser the negative keyword list belongs to.
     */
    advertiserId?: string;
    /**
     * Required. The display name of the negative keyword list. Must be UTF-8 encoded with a maximum size of 255 bytes.
     */
    displayName?: string;
    /**
     * Output only. The resource name of the negative keyword list.
     */
    name?: string;
    /**
     * Output only. The unique ID of the negative keyword list. Assigned by the system.
     */
    negativeKeywordListId?: string;
    /**
     * Output only. Number of line items that are directly targeting this negative keyword list.
     */
    targetedLineItemCount?: string;
}
