import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Push provider type
 */
export declare enum CheckPushRequestTypeOfPushProviderEnum {
    Firebase = "firebase",
    Apn = "apn",
    Huawei = "huawei",
    Xiaomi = "xiaomi"
}
export declare class CheckPushRequest extends SpeakeasyBase {
    /**
     * Push message template for APN
     */
    apnTemplate?: string;
    /**
     * Push message data template for Firebase
     */
    firebaseDataTemplate?: string;
    /**
     * Push message template for Firebase
     */
    firebaseTemplate?: string;
    /**
     * Message ID to send push notification for
     */
    messageId?: string;
    /**
     * Name of push provider
     */
    pushProviderName?: string;
    /**
     * Push provider type
     */
    pushProviderType?: CheckPushRequestTypeOfPushProviderEnum;
    /**
     * Don't require existing devices to render templates
     */
    skipDevices?: boolean;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    userId?: string;
}
