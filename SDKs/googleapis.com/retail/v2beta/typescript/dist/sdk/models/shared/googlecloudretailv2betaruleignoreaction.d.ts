import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
 */
export declare class GoogleCloudRetailV2betaRuleIgnoreAction extends SpeakeasyBase {
    /**
     * Terms to ignore in the search query.
     */
    ignoreTerms?: string[];
}
