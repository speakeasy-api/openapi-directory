import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaConditionQueryTerm } from "./googlecloudretailv2betaconditionqueryterm";
import { GoogleCloudRetailV2betaConditionTimeRange } from "./googlecloudretailv2betaconditiontimerange";
/**
 * Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.
 */
export declare class GoogleCloudRetailV2betaCondition extends SpeakeasyBase {
    /**
     * Range of time(s) specifying when Condition is active. Condition true if any time range matches.
     */
    activeTimeRange?: GoogleCloudRetailV2betaConditionTimeRange[];
    /**
     * A list (up to 10 entries) of terms to match the query on. If not specified, match all queries. If many query terms are specified, the condition is matched if any of the terms is a match (i.e. using the OR operator).
     */
    queryTerms?: GoogleCloudRetailV2betaConditionQueryTerm[];
}
