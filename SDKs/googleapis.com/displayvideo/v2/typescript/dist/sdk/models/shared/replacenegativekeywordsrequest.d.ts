import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordInput } from "./negativekeyword";
/**
 * Request message for NegativeKeywordService.ReplaceNegativeKeywords.
 */
export declare class ReplaceNegativeKeywordsRequestInput extends SpeakeasyBase {
    /**
     * The negative keywords that will replace the existing keywords in the negative keyword list, specified as a list of NegativeKeywords.
     */
    newNegativeKeywords?: NegativeKeywordInput[];
}
