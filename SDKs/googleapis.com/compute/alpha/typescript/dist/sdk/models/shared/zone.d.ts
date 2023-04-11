import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecationStatus } from "./deprecationstatus";
/**
 * [Output Only] Status of the zone, either UP or DOWN.
 */
export declare enum ZoneStatusEnum {
    Down = "DOWN",
    Up = "UP"
}
/**
 * Represents a Zone resource. A zone is a deployment area. These deployment areas are subsets of a region. For example the zone us-east1-a is located in the us-east1 region. For more information, read Regions and Zones.
 */
export declare class Zone extends SpeakeasyBase {
    /**
     * [Output Only] Available cpu/platform selections for the zone.
     */
    availableCpuPlatforms?: string[];
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
     * [Output Only] Type of the resource. Always compute#zone for zones.
     */
    kind?: string;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] Full URL reference to the region which hosts the zone.
     */
    region?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Status of the zone, either UP or DOWN.
     */
    status?: ZoneStatusEnum;
    /**
     * [Output Only] Reserved for future use.
     */
    supportsPzs?: boolean;
}
