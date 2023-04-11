import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { Subscription } from "./subscription";
/**
 * List of subscriptions
 */
export declare class SubscriptionDataList extends SpeakeasyBase {
    /**
     * Subscriptions retrieved from this user
     */
    data?: Subscription[];
    /**
     * Error list; appears only if there was an error
     */
    errors?: ErrorT[];
    /**
     * Optional error message
     */
    message?: string;
    /**
     * Current page that is being queried
     */
    page?: number;
    /**
     * Amount of subscriptions to show per page
     */
    perPage?: number;
    /**
     * Total number of subscriptions for this user
     */
    totalCount?: number;
}
