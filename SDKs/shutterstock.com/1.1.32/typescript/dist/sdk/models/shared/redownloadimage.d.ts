import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
/**
 * Size of the image
 */
export declare enum RedownloadImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Supersize = "supersize",
    Vector = "vector"
}
/**
 * Data required to redownload an image
 */
export declare class RedownloadImage extends SpeakeasyBase {
    /**
     * Cookie object
     */
    authCookie?: Cookie;
    /**
     * (Deprecated)
     */
    showModal?: boolean;
    /**
     * Size of the image
     */
    size?: RedownloadImageSizeEnum;
    /**
     * (Deprecated)
     */
    verificationCode?: string;
}
