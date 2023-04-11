import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceIdentifier } from "./deviceidentifier";
import { DeviceMetadata } from "./devicemetadata";
/**
 * Required. The section type of the device's provisioning record.
 */
export declare enum PartnerClaimSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Identifies one claim request.
 */
export declare class PartnerClaim extends SpeakeasyBase {
    /**
     * The ID of the customer for whom the device is being claimed.
     */
    customerId?: string;
    /**
     * Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
     */
    deviceIdentifier?: DeviceIdentifier;
    /**
     * Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
     */
    deviceMetadata?: DeviceMetadata;
    /**
     * The Google Workspace customer ID.
     */
    googleWorkspaceCustomerId?: string;
    /**
     * Optional. Must and can only be set for Chrome OS devices.
     */
    preProvisioningToken?: string;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: PartnerClaimSectionTypeEnum;
    /**
     * Optional. Must and can only be set when DeviceProvisioningSectionType is SECTION_TYPE_SIM_LOCK. The unique identifier of the SimLock profile.
     */
    simlockProfileId?: string;
}
