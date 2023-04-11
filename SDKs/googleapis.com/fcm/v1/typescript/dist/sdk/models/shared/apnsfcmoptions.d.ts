import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for features provided by the FCM SDK for iOS.
 */
export declare class ApnsFcmOptions extends SpeakeasyBase {
    /**
     * Label associated with the message's analytics data.
     */
    analyticsLabel?: string;
    /**
     * Contains the URL of an image that is going to be displayed in a notification. If present, it will override google.firebase.fcm.v1.Notification.image.
     */
    image?: string;
}
