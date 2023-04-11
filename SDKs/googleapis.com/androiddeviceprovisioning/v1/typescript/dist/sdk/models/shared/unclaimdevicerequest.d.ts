import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Required. The section type of the device's provisioning record.
 */
export declare enum UnclaimDeviceRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Request message to unclaim a device.
 */
export declare class UnclaimDeviceRequest extends SpeakeasyBase {
    /**
     * Required. The device ID returned by `ClaimDevice`.
     */
    deviceId?: string;
    /**
     * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
     */
    deviceIdentifier?: DeviceIdentifier;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: UnclaimDeviceRequestSectionTypeEnum;
    /**
     * The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)
     */
    vacationModeDays?: number;
    /**
     * The expiration time of the vacation unlock.
     */
    vacationModeExpireTime?: string;
}
