import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionOffer } from "./subscriptionoffer";
/**
 * Response message for ListSubscriptionOffers.
 */
export declare class ListSubscriptionOffersResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The subscription offers from the specified subscription.
     */
    subscriptionOffers?: SubscriptionOffer[];
}
