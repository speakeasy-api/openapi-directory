import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordInput } from "./negativekeyword";
/**
 * Request message for NegativeKeywordService.BulkEditNegativeKeywords.
 */
export declare class BulkEditNegativeKeywordsRequestInput extends SpeakeasyBase {
    /**
     * The negative keywords to create in batch, specified as a list of NegativeKeywords.
     */
    createdNegativeKeywords?: NegativeKeywordInput[];
    /**
     * The negative keywords to delete in batch, specified as a list of keyword_values.
     */
    deletedNegativeKeywords?: string[];
}
