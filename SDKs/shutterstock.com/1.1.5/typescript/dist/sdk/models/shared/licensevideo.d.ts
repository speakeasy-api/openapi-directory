import { SpeakeasyBase } from "../../../internal/utils";
import { Cookie } from "./cookie";
export declare enum LicenseVideoSizeEnum {
    Web = "web",
    Sd = "sd",
    Hd = "hd",
    Fourk = "4k"
}
/**
 * Data required to license a video
**/
export declare class LicenseVideo extends SpeakeasyBase {
    authCookie?: Cookie;
    editorialAcknowledgement?: boolean;
    metadata?: Record<string, any>;
    price?: number;
    searchId?: string;
    showModal?: boolean;
    size?: LicenseVideoSizeEnum;
    subscriptionId?: string;
    videoId: string;
}
