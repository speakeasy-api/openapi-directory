import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mobile app directory.
 */
export declare enum MobileAppDirectoryEnum {
    Unknown = "UNKNOWN",
    AppleAppStore = "APPLE_APP_STORE",
    GooglePlayStore = "GOOGLE_PLAY_STORE"
}
/**
 * Contains information about a mobile app. Used as a landing page deep link.
 */
export declare class MobileApp extends SpeakeasyBase {
    /**
     * Mobile app directory.
     */
    directory?: MobileAppDirectoryEnum;
    /**
     * ID of this mobile app.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#mobileApp".
     */
    kind?: string;
    /**
     * Publisher name.
     */
    publisherName?: string;
    /**
     * Title of this mobile app.
     */
    title?: string;
}
