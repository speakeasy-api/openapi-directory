import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecationStatus } from "./deprecationstatus";
/**
 * Represents a Disk Type resource. Google Compute Engine has two Disk Type resources: * [Regional](/compute/docs/reference/rest/v1/regionDiskTypes) * [Zonal](/compute/docs/reference/rest/v1/diskTypes) You can choose from a variety of disk types based on your needs. For more information, read Storage options. The diskTypes resource represents disk types for a zonal persistent disk. For more information, read Zonal persistent disks. The regionDiskTypes resource represents disk types for a regional persistent disk. For more information, read Regional persistent disks.
 */
export declare class DiskType extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * [Output Only] Server-defined default disk size in GB.
     */
    defaultDiskSizeGb?: string;
    /**
     * Deprecation status for a public resource.
     */
    deprecated?: DeprecationStatus;
    /**
     * [Output Only] An optional description of this resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#diskType for disk types.
     */
    kind?: string;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] URL of the region where the disk type resides. Only applicable for regional resources. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] An optional textual description of the valid disk size, such as "10GB-10TB".
     */
    validDiskSize?: string;
    /**
     * [Output Only] URL of the zone where the disk type resides. You must specify this field as part of the HTTP request URL. It is not settable as a field in the request body.
     */
    zone?: string;
}
