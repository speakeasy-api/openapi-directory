import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
 */
export declare class GoogleCloudRetailV2RuleDoNotAssociateAction extends SpeakeasyBase {
    /**
     * Cannot contain duplicates or the query term. Can specify up to 100 terms.
     */
    doNotAssociateTerms?: string[];
    /**
     * Terms from the search query. Will not consider do_not_associate_terms for search if in search query. Can specify up to 100 terms.
     */
    queryTerms?: string[];
    /**
     * Will be [deprecated = true] post migration;
     */
    terms?: string[];
}
