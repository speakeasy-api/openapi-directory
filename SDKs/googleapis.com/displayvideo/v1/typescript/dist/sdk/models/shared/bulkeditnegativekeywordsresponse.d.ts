import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";
/**
 * Response message for NegativeKeywordService.BulkEditNegativeKeywords.
 */
export declare class BulkEditNegativeKeywordsResponse extends SpeakeasyBase {
    /**
     * The list of negative keywords that have been successfully created. This list will be absent if empty.
     */
    negativeKeywords?: NegativeKeyword[];
}
