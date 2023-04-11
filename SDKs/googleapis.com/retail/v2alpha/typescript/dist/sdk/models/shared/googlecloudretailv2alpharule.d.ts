import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaCondition } from "./googlecloudretailv2alphacondition";
import { GoogleCloudRetailV2alphaRuleBoostAction } from "./googlecloudretailv2alpharuleboostaction";
import { GoogleCloudRetailV2alphaRuleDoNotAssociateAction } from "./googlecloudretailv2alpharuledonotassociateaction";
import { GoogleCloudRetailV2alphaRuleFilterAction } from "./googlecloudretailv2alpharulefilteraction";
import { GoogleCloudRetailV2alphaRuleIgnoreAction } from "./googlecloudretailv2alpharuleignoreaction";
import { GoogleCloudRetailV2alphaRuleOnewaySynonymsAction } from "./googlecloudretailv2alpharuleonewaysynonymsaction";
import { GoogleCloudRetailV2alphaRuleRedirectAction } from "./googlecloudretailv2alpharuleredirectaction";
import { GoogleCloudRetailV2alphaRuleReplacementAction } from "./googlecloudretailv2alpharulereplacementaction";
import { GoogleCloudRetailV2alphaRuleTwowaySynonymsAction } from "./googlecloudretailv2alpharuletwowaysynonymsaction";
/**
 * A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
 */
export declare class GoogleCloudRetailV2alphaRule extends SpeakeasyBase {
    /**
     * A boost action to apply to results matching condition specified above.
     */
    boostAction?: GoogleCloudRetailV2alphaRuleBoostAction;
    /**
     * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
     */
    condition?: GoogleCloudRetailV2alphaCondition;
    /**
     * Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
     */
    doNotAssociateAction?: GoogleCloudRetailV2alphaRuleDoNotAssociateAction;
    /**
     * * Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter.
     */
    filterAction?: GoogleCloudRetailV2alphaRuleFilterAction;
    /**
     * Prevents a term in the query from being used in search. Example: Don't search for "shoddy".
     */
    ignoreAction?: GoogleCloudRetailV2alphaRuleIgnoreAction;
    /**
     * Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".
     */
    onewaySynonymsAction?: GoogleCloudRetailV2alphaRuleOnewaySynonymsAction;
    /**
     * Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.
     */
    redirectAction?: GoogleCloudRetailV2alphaRuleRedirectAction;
    /**
     * Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".
     */
    replacementAction?: GoogleCloudRetailV2alphaRuleReplacementAction;
    /**
     * Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".
     */
    twowaySynonymsAction?: GoogleCloudRetailV2alphaRuleTwowaySynonymsAction;
}
