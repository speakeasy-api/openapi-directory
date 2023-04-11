import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Basic notification template to use across all platforms.
 */
export declare class Notification extends SpeakeasyBase {
    /**
     * The notification's body text.
     */
    body?: string;
    /**
     * Contains the URL of an image that is going to be downloaded on the device and displayed in a notification. JPEG, PNG, BMP have full support across platforms. Animated GIF and video only work on iOS. WebP and HEIF have varying levels of support across platforms and platform versions. Android has 1MB image size limit. Quota usage and implications/costs for hosting image on Firebase Storage: https://firebase.google.com/pricing
     */
    image?: string;
    /**
     * The notification's title.
     */
    title?: string;
}
