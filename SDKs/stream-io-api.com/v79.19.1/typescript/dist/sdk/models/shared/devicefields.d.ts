import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceFieldsPushProviderEnum {
    Firebase = "firebase",
    Apn = "apn",
    Huawei = "huawei",
    Xiaomi = "xiaomi"
}
export declare class DeviceFields extends SpeakeasyBase {
    /**
     * Device ID
     */
    id?: string;
    pushProvider?: DeviceFieldsPushProviderEnum;
    /**
     * Name of the push provider configuration
     */
    pushProviderName?: string;
}
