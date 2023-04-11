import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
/**
 * Size of the video being licensed
 */
export declare enum LicenseVideoSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}
/**
 * Data required to license a video
 */
export declare class LicenseVideo extends SpeakeasyBase {
    /**
     * Cookie object
     */
    authCookie?: Cookie;
    /**
     * Whether or not this item is editorial content
     */
    editorialAcknowledgement?: boolean;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     */
    metadata?: Record<string, any>;
    /**
     * Retail price amount as a floating-point number in the transaction currency, such as 12.34; only for rev-share partners
     */
    price?: number;
    /**
     * ID of the search that led to this licensing event
     */
    searchId?: string;
    /**
     * (Deprecated)
     */
    showModal?: boolean;
    /**
     * Size of the video being licensed
     */
    size?: LicenseVideoSizeEnum;
    /**
     * ID of the subscription used for this license
     */
    subscriptionId?: string;
    /**
     * ID of the video being licensed
     */
    videoId: string;
}
