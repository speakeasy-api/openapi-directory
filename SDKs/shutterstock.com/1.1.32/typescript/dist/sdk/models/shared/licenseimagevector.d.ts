import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
/**
 * (Deprecated) Image format to download
 */
export declare enum LicenseImageVectorFormatEnum {
    Eps = "eps"
}
/**
 * Image size to download
 */
export declare enum LicenseImageVectorSizeEnum {
    Vector = "vector"
}
/**
 * Data required to license an image
 */
export declare class LicenseImageVector extends SpeakeasyBase {
    /**
     * Cookie object
     */
    authCookie?: Cookie;
    /**
     * Set to true to acknowledge the editorial agreement
     */
    editorialAcknowledgement?: boolean;
    /**
     * (Deprecated) Image format to download
     */
    format?: LicenseImageVectorFormatEnum;
    /**
     * Image ID
     */
    imageId: string;
    /**
     * Additional information for license requests for enterprise accounts and API subscriptions, 4 fields maximum; which fields are required is set by the account holder
     */
    metadata?: Record<string, any>;
    /**
     * For revenue-sharing transactions, the final cost to the end customer as a floating-point number in the transaction currency, such as 12.34
     */
    price?: number;
    /**
     * ID of the search that led to this licensing transaction
     */
    searchId?: string;
    /**
     * (Deprecated)
     */
    showModal?: boolean;
    /**
     * Image size to download
     */
    size?: LicenseImageVectorSizeEnum;
    /**
     * ID of the subscription to use for the download.
     */
    subscriptionId?: string;
    /**
     * (Deprecated)
     */
    verificationCode?: string;
}
