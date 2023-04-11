import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecationStatus } from "./deprecationstatus";
import { Quota } from "./quota";
/**
 * [Output Only] Status of the region, either UP or DOWN.
 */
export declare enum RegionStatusEnum {
    Down = "DOWN",
    Up = "UP"
}
/**
 * Represents a Region resource. A region is a geographical area where a resource is located. For more information, read Regions and Zones.
 */
export declare class Region extends SpeakeasyBase {
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * Deprecation status for a public resource.
     */
    deprecated?: DeprecationStatus;
    /**
     * [Output Only] Textual description of the resource.
     */
    description?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#region for regions.
     */
    kind?: string;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] Quotas assigned to this region.
     */
    quotas?: Quota[];
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Status of the region, either UP or DOWN.
     */
    status?: RegionStatusEnum;
    /**
     * [Output Only] Reserved for future use.
     */
    supportsPzs?: boolean;
    /**
     * [Output Only] A list of zones available in this region, in the form of resource URLs.
     */
    zones?: string[];
}
