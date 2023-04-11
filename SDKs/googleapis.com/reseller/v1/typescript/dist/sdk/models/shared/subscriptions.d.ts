import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * A subscription manages the relationship of a Google customer's payment plan with a product's SKU, user licenses, 30-day free trial status, and renewal options. A primary role of a reseller is to manage the Google customer's subscriptions.
 */
export declare class Subscriptions extends SpeakeasyBase {
    /**
     * Identifies the resource as a collection of subscriptions. Value: reseller#subscriptions
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
    /**
     * The subscriptions in this page of results.
     */
    subscriptions?: Subscription[];
}
