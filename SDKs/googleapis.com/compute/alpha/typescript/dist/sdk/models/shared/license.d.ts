import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseResourceRequirements } from "./licenseresourcerequirements";
/**
 * Represents a License resource. A License represents billing and aggregate usage data for public and marketplace images. *Caution* This resource is intended for use only by third-party partners who are creating Cloud Marketplace images.
 */
export declare class License extends SpeakeasyBase {
    /**
     * [Output Only] Deprecated. This field no longer reflects whether a license charges a usage fee.
     */
    chargesUseFee?: boolean;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional textual description of the resource; provided by the client when the resource is created.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of resource. Always compute#license for licenses.
     */
    kind?: string;
    /**
     * [Output Only] The unique code used to attach this license to images, snapshots, and disks.
     */
    licenseCode?: string;
    /**
     * Name of the resource. The name must be 1-63 characters long and comply with RFC1035.
     */
    name?: string;
    resourceRequirements?: LicenseResourceRequirements;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * If false, licenses will not be copied from the source resource when creating an image from a disk, disk from snapshot, or snapshot from disk.
     */
    transferable?: boolean;
}
