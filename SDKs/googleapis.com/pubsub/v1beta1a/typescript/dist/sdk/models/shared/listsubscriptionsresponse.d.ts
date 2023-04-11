import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * Response for the ListSubscriptions method.
 */
export declare class ListSubscriptionsResponse extends SpeakeasyBase {
    /**
     * If not empty, indicates that there are more subscriptions that match the request and this value should be passed to the next ListSubscriptionsRequest to continue.
     */
    nextPageToken?: string;
    /**
     * The subscriptions that match the request.
     */
    subscription?: Subscription[];
}
