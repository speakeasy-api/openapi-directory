import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class NotifyV1Service extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
     */
    accountSid?: string;
    /**
     * Deprecated.
     */
    alexaSkillId?: string;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings.
     */
    apnCredentialSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * Deprecated.
     */
    defaultAlexaNotificationProtocolVersion?: string;
    /**
     * The protocol version to use for sending APNS notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
     */
    defaultApnNotificationProtocolVersion?: string;
    /**
     * The protocol version to use for sending FCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
     */
    defaultFcmNotificationProtocolVersion?: string;
    /**
     * The protocol version to use for sending GCM notifications. Can be overridden on a Binding by Binding basis when creating a [Binding](https://www.twilio.com/docs/notify/api/binding-resource) resource.
     */
    defaultGcmNotificationProtocolVersion?: string;
    /**
     * Callback configuration that enables delivery callbacks, default false
     */
    deliveryCallbackEnabled?: boolean;
    /**
     * URL to send delivery status callback.
     */
    deliveryCallbackUrl?: string;
    /**
     * Deprecated.
     */
    facebookMessengerPageId?: string;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for FCM Bindings.
     */
    fcmCredentialSid?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings.
     */
    gcmCredentialSid?: string;
    /**
     * The URLs of the Binding, Notification, Segment, and User resources related to the service.
     */
    links?: Record<string, any>;
    /**
     * Whether to log notifications. Can be: `true` or `false` and the default is `true`.
     */
    logEnabled?: boolean;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/send-messages#messaging-services) to use for SMS Bindings. In order to send SMS notifications this parameter has to be set.
     */
    messagingServiceSid?: string;
    /**
     * The unique string that we created to identify the Service resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Service resource.
     */
    url?: string;
}
