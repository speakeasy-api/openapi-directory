import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
/**
 * Size of the video
 */
export declare enum RedownloadVideoSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}
/**
 * Data required to redownload a video
 */
export declare class RedownloadVideo extends SpeakeasyBase {
    /**
     * Cookie object
     */
    authCookie?: Cookie;
    /**
     * (Deprecated)
     */
    showModal?: boolean;
    /**
     * Size of the video
     */
    size?: RedownloadVideoSizeEnum;
    /**
     * (Deprecated)
     */
    verificationCode?: string;
}
