import { SpeakeasyBase } from "../../../internal/utils";
import { InterconnectAttachmentConfigurationConstraints } from "./interconnectattachmentconfigurationconstraints";
import { InterconnectRemoteLocationConstraints } from "./interconnectremotelocationconstraints";
import { InterconnectRemoteLocationPermittedConnections } from "./interconnectremotelocationpermittedconnections";
/**
 * [Output Only] Continent for this location, which can take one of the following values: - AFRICA - ASIA_PAC - EUROPE - NORTH_AMERICA - SOUTH_AMERICA
 */
export declare enum InterconnectRemoteLocationContinentEnum {
    Africa = "AFRICA",
    AsiaPac = "ASIA_PAC",
    Europe = "EUROPE",
    NorthAmerica = "NORTH_AMERICA",
    SouthAmerica = "SOUTH_AMERICA"
}
/**
 * [Output Only] Link Aggregation Control Protocol (LACP) constraints, which can take one of the following values: LACP_SUPPORTED, LACP_UNSUPPORTED
 */
export declare enum InterconnectRemoteLocationLacpEnum {
    LacpSupported = "LACP_SUPPORTED",
    LacpUnsupported = "LACP_UNSUPPORTED"
}
/**
 * [Output Only] The status of this InterconnectRemoteLocation, which can take one of the following values: - CLOSED: The InterconnectRemoteLocation is closed and is unavailable for provisioning new Cross-Cloud Interconnects. - AVAILABLE: The InterconnectRemoteLocation is available for provisioning new Cross-Cloud Interconnects.
 */
export declare enum InterconnectRemoteLocationStatusEnum {
    Available = "AVAILABLE",
    Closed = "CLOSED"
}
/**
 * Represents an Cross-Cloud Interconnect Remote Location resource. You can use this resource to find remote location details about an Interconnect attachment (VLAN).
 */
export declare class InterconnectRemoteLocation extends SpeakeasyBase {
    /**
     * [Output Only] The postal address of the Point of Presence, each line in the address is separated by a newline character.
     */
    address?: string;
    attachmentConfigurationConstraints?: InterconnectAttachmentConfigurationConstraints;
    /**
     * [Output Only] Metropolitan area designator that indicates which city an interconnect is located. For example: "Chicago, IL", "Amsterdam, Netherlands".
     */
    city?: string;
    constraints?: InterconnectRemoteLocationConstraints;
    /**
     * [Output Only] Continent for this location, which can take one of the following values: - AFRICA - ASIA_PAC - EUROPE - NORTH_AMERICA - SOUTH_AMERICA
     */
    continent?: InterconnectRemoteLocationContinentEnum;
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
     * [Output Only] Type of the resource. Always compute#interconnectRemoteLocation for interconnect remote locations.
     */
    kind?: string;
    /**
     * [Output Only] Link Aggregation Control Protocol (LACP) constraints, which can take one of the following values: LACP_SUPPORTED, LACP_UNSUPPORTED
     */
    lacp?: InterconnectRemoteLocationLacpEnum;
    /**
     * [Output Only] The maximum number of 100 Gbps ports supported in a link aggregation group (LAG). When linkType is 100 Gbps, requestedLinkCount cannot exceed max_lag_size_100_gbps.
     */
    maxLagSize100Gbps?: number;
    /**
     * [Output Only] The maximum number of 10 Gbps ports supported in a link aggregation group (LAG). When linkType is 10 Gbps, requestedLinkCount cannot exceed max_lag_size_10_gbps.
     */
    maxLagSize10Gbps?: number;
    /**
     * [Output Only] Name of the resource.
     */
    name?: string;
    /**
     * [Output Only] The peeringdb identifier for this facility (corresponding with a netfac type in peeringdb).
     */
    peeringdbFacilityId?: string;
    /**
     * [Output Only] Permitted connections.
     */
    permittedConnections?: InterconnectRemoteLocationPermittedConnections[];
    /**
     * [Output Only] Indicates the service provider present at the remote location. Example values: "Amazon Web Services", "Microsoft Azure".
     */
    remoteService?: string;
    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * [Output Only] The status of this InterconnectRemoteLocation, which can take one of the following values: - CLOSED: The InterconnectRemoteLocation is closed and is unavailable for provisioning new Cross-Cloud Interconnects. - AVAILABLE: The InterconnectRemoteLocation is available for provisioning new Cross-Cloud Interconnects.
     */
    status?: InterconnectRemoteLocationStatusEnum;
}
