import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the device.
 */
export declare enum DeviceInfoDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    Web = "WEB",
    MobileWeb = "MOBILE_WEB",
    Android = "ANDROID",
    Ios = "IOS",
    Bot = "BOT",
    Other = "OTHER"
}
/**
 * Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
 */
export declare class DeviceInfo extends SpeakeasyBase {
    /**
     * Type of the device.
     */
    deviceType?: DeviceInfoDeviceTypeEnum;
    /**
     * A device-specific ID. The ID must be a unique identifier that distinguishes the device from other devices.
     */
    id?: string;
}
