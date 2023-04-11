import { SpeakeasyBase } from "../../../internal/utils";
import { SearchSubscriptionsFilter } from "./searchsubscriptionsfilter";
/**
 * Represents a query (including filtering criteria) used to search for subscriptions.
 */
export declare class SearchSubscriptionsQuery extends SpeakeasyBase {
    /**
     * Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions.
     */
    filter?: SearchSubscriptionsFilter;
}
