import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class EventsV1Subscription extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The date that this Subscription was created, given in ISO 8601 format.
     */
    dateCreated?: Date;
    /**
     * The date that this Subscription was updated, given in ISO 8601 format.
     */
    dateUpdated?: Date;
    /**
     * A human readable description for the Subscription
     */
    description?: string;
    /**
     * Contains a dictionary of URL links to nested resources of this Subscription.
     */
    links?: Record<string, any>;
    /**
     * A 34 character string that uniquely identifies this Subscription.
     */
    sid?: string;
    /**
     * The SID of the sink that events selected by this subscription should be sent to. Sink must be active for the subscription to be created.
     */
    sinkSid?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
