import { SpeakeasyBase } from "../../../internal/utils";
import { Subscription } from "./subscription";
/**
 * Response message for ListSubscriptions.
 */
export declare class ListSubscriptionsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The subscriptions from the specified app.
     */
    subscriptions?: Subscription[];
}
