import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";
/**
 * Response message for NegativeKeywordService.ReplaceNegativeKeywords.
 */
export declare class ReplaceNegativeKeywordsResponse extends SpeakeasyBase {
    /**
     * The full list of negative keywords now present in the negative keyword list.
     */
    negativeKeywords?: NegativeKeyword[];
}
