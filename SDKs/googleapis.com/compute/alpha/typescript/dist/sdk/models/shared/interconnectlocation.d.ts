import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectLocationRegionInfo } from "./interconnectlocationregioninfo";
/**
 * [Output Only] Continent for this location, which can take one of the following values: - AFRICA - ASIA_PAC - EUROPE - NORTH_AMERICA - SOUTH_AMERICA
 */
export declare enum InterconnectLocationContinentEnum {
    Africa = "AFRICA",
    AsiaPac = "ASIA_PAC",
    CAfrica = "C_AFRICA",
    CAsiaPac = "C_ASIA_PAC",
    CEurope = "C_EUROPE",
    CNorthAmerica = "C_NORTH_AMERICA",
    CSouthAmerica = "C_SOUTH_AMERICA",
    Europe = "EUROPE",
    NorthAmerica = "NORTH_AMERICA",
    SouthAmerica = "SOUTH_AMERICA"
}
/**
 * [Output Only] The status of this InterconnectLocation, which can take one of the following values: - CLOSED: The InterconnectLocation is closed and is unavailable for provisioning new Interconnects. - AVAILABLE: The InterconnectLocation is available for provisioning new Interconnects.
 */
export declare enum InterconnectLocationStatusEnum {
    Available = "AVAILABLE",
    Closed = "CLOSED"
}
/**
 * Represents an Interconnect Attachment (VLAN) Location resource. You can use this resource to find location details about an Interconnect attachment (VLAN). For more information about interconnect attachments, read Creating VLAN Attachments.
 */
export declare class InterconnectLocation extends SpeakeasyBase {
    /**
     * [Output Only] The postal address of the Point of Presence, each line in the address is separated by a newline character.
     */
    address?: string;
    /**
     * [Output Only] Availability zone for this InterconnectLocation. Within a metropolitan area (metro), maintenance will not be simultaneously scheduled in more than one availability zone. Example: "zone1" or "zone2".
     */
    availabilityZone?: string;
    /**
     * [Output Only] Metropolitan area designator that indicates which city an interconnect is located. For example: "Chicago, IL", "Amsterdam, Netherlands".
     */
    city?: string;
    /**
     * [Output Only] Continent for this location, which can take one of the following values: - AFRICA - ASIA_PAC - EUROPE - NORTH_AMERICA - SOUTH_AMERICA
     */
    continent?: InterconnectLocationContinentEnum;
    /**
     * [Output Only] Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * [Output Only] An optional description of the resource.
     */
    description?: string;
    /**
     * [Output Only] The name of the provider for this facility (e.g., EQUINIX).
     */
    facilityProvider?: string;
    /**
     * [Output Only] A provider-assigned Identifier for this facility (e.g., Ashburn-DC1).
     */
    facilityProviderFacilityId?: string;
    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;
    /**
     * [Output Only] Type of the resource. Always compute#interconnectLocation for interconnect locations.
     */
    kind?: string;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] The peeringdb identifier for this facility (corresponding with a netfac type in peeringdb).
     */
    peeringdbFacilityId?: string;
    /**
     * [Output Only] A list of InterconnectLocation.RegionInfo objects, that describe parameters pertaining to the relation between this InterconnectLocation and various Google Cloud regions.
     */
    regionInfos?: InterconnectLocationRegionInfo[];
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * [Output Only] The status of this InterconnectLocation, which can take one of the following values: - CLOSED: The InterconnectLocation is closed and is unavailable for provisioning new Interconnects. - AVAILABLE: The InterconnectLocation is available for provisioning new Interconnects.
     */
    status?: InterconnectLocationStatusEnum;
    /**
     * [Output Only] Reserved for future use.
     */
    supportsPzs?: boolean;
}
