import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".
 */
export declare class GoogleCloudRetailV2alphaRuleReplacementAction extends SpeakeasyBase {
    /**
     * Terms from the search query. Will be replaced by replacement term. Can specify up to 100 terms.
     */
    queryTerms?: string[];
    /**
     * Term that will be used for replacement.
     */
    replacementTerm?: string;
    /**
     * Will be [deprecated = true] post migration;
     */
    term?: string;
}
