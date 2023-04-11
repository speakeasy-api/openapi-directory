import { SpeakeasyBase } from "../../../internal/utils";
import { PublicSubscriptionStatus } from "./publicsubscriptionstatus";
/**
 * A collection of subscription statuses for a contact.
 */
export declare class PublicSubscriptionStatusesResponse extends SpeakeasyBase {
    /**
     * Email address of the contact.
     */
    recipient: string;
    /**
     * A list of all of the contact's subscriptions statuses.
     */
    subscriptionStatuses: PublicSubscriptionStatus[];
}
