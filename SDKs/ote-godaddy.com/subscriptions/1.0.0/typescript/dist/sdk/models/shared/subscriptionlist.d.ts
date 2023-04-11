import { SpeakeasyBase } from "../../../internal/utils";
import { Pagination } from "./pagination";
import { Subscription } from "./subscription";
/**
 * Request was successful
 */
export declare class SubscriptionList extends SpeakeasyBase {
    pagination: Pagination;
    /**
     * A collection of subscriptions
     */
    subscriptions: Subscription[];
}
