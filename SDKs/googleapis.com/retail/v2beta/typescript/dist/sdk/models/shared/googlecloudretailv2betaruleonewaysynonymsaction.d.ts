import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".
 */
export declare class GoogleCloudRetailV2betaRuleOnewaySynonymsAction extends SpeakeasyBase {
    /**
     * Will be [deprecated = true] post migration;
     */
    onewayTerms?: string[];
    /**
     * Terms from the search query. Will treat synonyms as their synonyms. Not themselves synonyms of the synonyms. Can specify up to 100 terms.
     */
    queryTerms?: string[];
    /**
     * Defines a set of synonyms. Cannot contain duplicates. Can specify up to 100 synonyms.
     */
    synonyms?: string[];
}
