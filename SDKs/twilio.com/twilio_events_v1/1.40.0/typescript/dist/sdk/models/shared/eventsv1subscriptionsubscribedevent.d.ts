import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class EventsV1SubscriptionSubscribedEvent extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The schema version that the subscription should use.
     */
    schemaVersion?: number;
    /**
     * The unique SID identifier of the Subscription.
     */
    subscriptionSid?: string;
    /**
     * Type of event being subscribed to.
     */
    type?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
