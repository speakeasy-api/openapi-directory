import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The section type of the device's provisioning record.
 */
export declare enum FindDevicesByOwnerRequestSectionTypeEnum {
    SectionTypeUnspecified = "SECTION_TYPE_UNSPECIFIED",
    SectionTypeSimLock = "SECTION_TYPE_SIM_LOCK",
    SectionTypeZeroTouch = "SECTION_TYPE_ZERO_TOUCH"
}
/**
 * Request to find devices by customers.
 */
export declare class FindDevicesByOwnerRequest extends SpeakeasyBase {
    /**
     * The list of customer IDs to search for.
     */
    customerId?: string[];
    /**
     * The list of IDs of Google Workspace accounts to search for.
     */
    googleWorkspaceCustomerId?: string[];
    /**
     * Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
     */
    limit?: string;
    /**
     * A token specifying which result page to return.
     */
    pageToken?: string;
    /**
     * Required. The section type of the device's provisioning record.
     */
    sectionType?: FindDevicesByOwnerRequestSectionTypeEnum;
}
