import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateDeviceRequestPushProviderEnum {
    Firebase = "firebase",
    Apn = "apn",
    Huawei = "huawei",
    Xiaomi = "xiaomi"
}
export declare class CreateDeviceRequest extends SpeakeasyBase {
    id?: string;
    pushProvider?: CreateDeviceRequestPushProviderEnum;
    pushProviderName?: string;
    /**
     * Represents chat user
     */
    user?: Record<string, any>;
    /**
     * **Server-side only**. User ID which server acts upon
     */
    userId?: string;
}
