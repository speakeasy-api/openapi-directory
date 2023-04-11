import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceServerList: readonly ["https://notify.twilio.com"];
export declare class UpdateServiceSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceUpdateServiceRequest extends SpeakeasyBase {
    /**
     * Deprecated.
     */
    alexaSkillId?: string;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for APN Bindings.
     */
    apnCredentialSid?: string;
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
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The SID of the [Credential](https://www.twilio.com/docs/notify/api/credential-resource) to use for GCM Bindings.
     */
    gcmCredentialSid?: string;
    /**
     * Whether to log notifications. Can be: `true` or `false` and the default is `true`.
     */
    logEnabled?: boolean;
    /**
     * The SID of the [Messaging Service](https://www.twilio.com/docs/sms/send-messages#messaging-services) to use for SMS Bindings. This parameter must be set in order to send SMS notifications.
     */
    messagingServiceSid?: string;
}
export declare class UpdateServiceRequest extends SpeakeasyBase {
    requestBody?: UpdateServiceUpdateServiceRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Service resource to update.
     */
    sid: string;
}
export declare class UpdateServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    notifyV1Service?: shared.NotifyV1Service;
}
