import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
export declare enum RedownloadVideoSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}
/**
 * Data required to redownload a video
**/
export declare class RedownloadVideo extends SpeakeasyBase {
    authCookie?: Cookie;
    showModal?: boolean;
    size?: RedownloadVideoSizeEnum;
    verificationCode?: string;
}
