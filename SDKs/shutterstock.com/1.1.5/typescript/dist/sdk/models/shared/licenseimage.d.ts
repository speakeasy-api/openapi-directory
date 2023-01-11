import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
import { CustomSizeDimensions } from "./customsizedimensions";
export declare enum LicenseImageFormatEnum {
    Jpg = "jpg",
    Eps = "eps"
}
export declare enum LicenseImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Vector = "vector",
    Custom = "custom"
}
/**
 * Data required to license an image
**/
export declare class LicenseImage extends SpeakeasyBase {
    authCookie?: Cookie;
    customDimensions?: CustomSizeDimensions;
    editorialAcknowledgement?: boolean;
    format?: LicenseImageFormatEnum;
    imageId: string;
    metadata?: Record<string, any>;
    price?: number;
    searchId?: string;
    showModal?: boolean;
    size?: LicenseImageSizeEnum;
    subscriptionId?: string;
    verificationCode?: string;
}
