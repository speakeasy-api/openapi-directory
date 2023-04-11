import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a set of SearchSubscriptionsQuery filters used to limit the set of Subscriptions returned by SearchSubscriptions.
 */
export declare class SearchSubscriptionsFilter extends SpeakeasyBase {
    /**
     * A filter to select subscriptions based on the customer.
     */
    customerIds?: string[];
    /**
     * A filter to select subscriptions based the location.
     */
    locationIds?: string[];
}
