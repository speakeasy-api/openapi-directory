import { SpeakeasyBase } from "../../../internal/utils";
import { WebpushFcmOptions } from "./webpushfcmoptions";
/**
 * [Webpush protocol](https://tools.ietf.org/html/rfc8030) options.
 */
export declare class WebpushConfig extends SpeakeasyBase {
    /**
     * Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data.
     */
    data?: Record<string, string>;
    /**
     * Options for features provided by the FCM SDK for Web.
     */
    fcmOptions?: WebpushFcmOptions;
    /**
     * HTTP headers defined in webpush protocol. Refer to [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for supported headers, e.g. "TTL": "15".
     */
    headers?: Record<string, string>;
    /**
     * Web Notification options as a JSON object. Supports Notification instance properties as defined in [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If present, "title" and "body" fields override [google.firebase.fcm.v1.Notification.title] and [google.firebase.fcm.v1.Notification.body].
     */
    notification?: Record<string, any>;
}
