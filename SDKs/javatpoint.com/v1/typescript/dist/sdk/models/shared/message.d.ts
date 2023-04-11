import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidConfig } from "./androidconfig";
import { ApnsConfig } from "./apnsconfig";
import { FcmOptions } from "./fcmoptions";
import { Notification } from "./notification";
import { WebpushConfig } from "./webpushconfig";
/**
 * Message to send by Firebase Cloud Messaging Service.
 */
export declare class Message extends SpeakeasyBase {
    /**
     * Android specific options for messages sent through [FCM connection server](https://goo.gl/4GLdUl).
     */
    android?: AndroidConfig;
    /**
     * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
     */
    apns?: ApnsConfig;
    /**
     * Condition to send a message to, e.g. "'foo' in topics && 'bar' in topics".
     */
    condition?: string;
    /**
     * Input only. Arbitrary key/value payload, which must be UTF-8 encoded. The key should not be a reserved word ("from", "message_type", or any word starting with "google" or "gcm"). When sending payloads containing only data fields to iOS devices, only normal priority (`"apns-priority": "5"`) is allowed in [`ApnsConfig`](/docs/reference/fcm/rest/v1/projects.messages#apnsconfig).
     */
    data?: Record<string, string>;
    /**
     * Platform independent options for features provided by the FCM SDKs.
     */
    fcmOptions?: FcmOptions;
    /**
     * Output Only. The identifier of the message sent, in the format of `projects/* /messages/{message_id}`.
     */
    name?: string;
    /**
     * Basic notification template to use across all platforms.
     */
    notification?: Notification;
    /**
     * Registration token to send a message to.
     */
    token?: string;
    /**
     * Topic name to send a message to, e.g. "weather". Note: "/topics/" prefix should not be provided.
     */
    topic?: string;
    /**
     * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
     */
    webpush?: WebpushConfig;
}
