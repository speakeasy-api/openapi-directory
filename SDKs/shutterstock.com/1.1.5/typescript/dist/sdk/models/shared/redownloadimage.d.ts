import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
export declare enum RedownloadImageSizeEnum {
    Small = "small",
    Medium = "medium",
    Huge = "huge",
    Supersize = "supersize",
    Vector = "vector"
}
/**
 * Data required to redownload an image
**/
export declare class RedownloadImage extends SpeakeasyBase {
    authCookie?: Cookie;
    showModal?: boolean;
    size?: RedownloadImageSizeEnum;
    verificationCode?: string;
}
