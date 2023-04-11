import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for features provided by the FCM SDK for Web.
 */
export declare class WebpushFcmOptions extends SpeakeasyBase {
    /**
     * Label associated with the message's analytics data.
     */
    analyticsLabel?: string;
    /**
     * The link to open when the user clicks on the notification. For all URL values, HTTPS is required.
     */
    link?: string;
}
