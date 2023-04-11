import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Additional service registered for the device.
 */
export declare enum DeviceClaimAdditionalServiceEnum {
    AdditionalServiceUnspecified = "ADDITIONAL_SERVICE_UNSPECIFIED",
    DeviceProtection = "DEVICE_PROTECTION"
}
/**
 * Output only. The type of claim made on the device.
 */
export declare enum DeviceClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
 */
export declare class DeviceClaim extends SpeakeasyBase {
    /**
     * The Additional service registered for the device.
     */
    additionalService?: DeviceClaimAdditionalServiceEnum;
    /**
     * The ID of the Google Workspace account that owns the Chrome OS device.
     */
    googleWorkspaceCustomerId?: string;
    /**
     * The ID of the Customer that purchased the device.
     */
    ownerCompanyId?: string;
    /**
     * The ID of the reseller that claimed the device.
     */
    resellerId?: string;
    /**
     * Output only. The type of claim made on the device.
     */
    sectionType?: DeviceClaimSectionTypeEnum;
    /**
     * The timestamp when the device will exit ‘vacation mode’. This value is present iff the device is in 'vacation mode'.
     */
    vacationModeExpireTime?: string;
    /**
     * The timestamp when the device was put into ‘vacation mode’. This value is present iff the device is in 'vacation mode'.
     */
    vacationModeStartTime?: string;
}
