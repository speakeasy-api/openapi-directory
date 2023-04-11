import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ApiV2010AccountCallUserDefinedMessageSubscription extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that subscribed to the User Defined Messages.
     */
    accountSid?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the User Defined Message Subscription is associated with. This refers to the Call SID that is producing the User Defined Messages.
     */
    callSid?: string;
    /**
     * The date that this User Defined Message Subscription was created, given in RFC 2822 format.
     */
    dateCreated?: string;
    /**
     * The SID that uniquely identifies this User Defined Message Subscription.
     */
    sid?: string;
    /**
     * The URI of the User Defined Message Subscription Resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
