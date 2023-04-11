import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseCodeLicenseAlias } from "./licensecodelicensealias";
/**
 * [Output Only] Current state of this License Code.
 */
export declare enum LicenseCodeStateEnum {
    Disabled = "DISABLED",
    Enabled = "ENABLED",
    Restricted = "RESTRICTED",
    StateUnspecified = "STATE_UNSPECIFIED",
    Terminated = "TERMINATED"
}
/**
 * Represents a License Code resource. A License Code is a unique identifier used to represent a license resource. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
 */
export declare class LicenseCode extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * [Output Only] Description of this License Code.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of resource. Always compute#licenseCode for licenses.
     */
    kind?: string;
    /**
     * [Output Only] URL and description aliases of Licenses with the same License Code.
     */
    licenseAlias?: LicenseCodeLicenseAlias[];
    /**
     * [Output Only] Name of the resource. The name is 1-20 characters long and must be a valid 64 bit integer.
     */
    name?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Current state of this License Code.
     */
    state?: LicenseCodeStateEnum;
    /**
     * [Output Only] If true, the license will remain attached when creating images or snapshots from disks. Otherwise, the license is not transferred.
     */
    transferable?: boolean;
}
