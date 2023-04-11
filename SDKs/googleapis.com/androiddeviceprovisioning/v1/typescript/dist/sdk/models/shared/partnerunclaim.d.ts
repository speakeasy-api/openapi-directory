import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
/**
 * Required. The section type of the device's provisioning record.
 */
export declare enum PartnerUnclaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Identifies one unclaim request.
 */
export declare class PartnerUnclaim extends SpeakeasyBase {
    /**
     * Required. Device ID of the device.
     */
    deviceId?: string;
    /**
     * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
     */
    deviceIdentifier?: DeviceIdentifier;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: PartnerUnclaimSectionTypeEnum;
    /**
     * Optional. The duration of the vacation unlock starting from when the request is processed. (1 day is treated as 24 hours)
     */
    vacationModeDays?: number;
    /**
     * Optional. The expiration time of the vacation unlock.
     */
    vacationModeExpireTime?: string;
}
