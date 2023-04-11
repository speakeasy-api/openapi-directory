import { SpeakeasyBase } from "../../../internal/utils";
import { ApnsFcmOptions } from "./apnsfcmoptions";
/**
 * [Apple Push Notification Service](https://goo.gl/MXRTPa) specific options.
 */
export declare class ApnsConfig extends SpeakeasyBase {
    /**
     * Options for features provided by the FCM SDK for iOS.
     */
    fcmOptions?: ApnsFcmOptions;
    /**
     * HTTP request headers defined in Apple Push Notification Service. Refer to [APNs request headers](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/sending_notification_requests_to_apns) for supported headers such as `apns-expiration` and `apns-priority`. The backend sets a default value for `apns-expiration` of 30 days and a default value for `apns-priority` of 10 if not explicitly set.
     */
    headers?: Record<string, string>;
    /**
     * APNs payload as a JSON object, including both `aps` dictionary and custom payload. See [Payload Key Reference](https://developer.apple.com/documentation/usernotifications/setting_up_a_remote_notification_server/generating_a_remote_notification). If present, it overrides google.firebase.fcm.v1.Notification.title and google.firebase.fcm.v1.Notification.body.
     */
    payload?: Record<string, any>;
}
