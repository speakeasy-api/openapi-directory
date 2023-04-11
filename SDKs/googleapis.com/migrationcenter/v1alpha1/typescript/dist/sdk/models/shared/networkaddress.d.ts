import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether DHCP is used to assign addresses.
 */
export declare enum NetworkAddressAssignmentEnum {
    AddressAssignmentUnspecified = "ADDRESS_ASSIGNMENT_UNSPECIFIED",
    AddressAssignmentStatic = "ADDRESS_ASSIGNMENT_STATIC",
    AddressAssignmentDhcp = "ADDRESS_ASSIGNMENT_DHCP"
}
/**
 * Details of network address.
 */
export declare class NetworkAddress extends SpeakeasyBase {
    /**
     * Whether DHCP is used to assign addresses.
     */
    assignment?: NetworkAddressAssignmentEnum;
    /**
     * Broadcast address.
     */
    bcast?: string;
    /**
     * Fully qualified domain name.
     */
    fqdn?: string;
    /**
     * Assigned or configured IP Address.
     */
    ipAddress?: string;
    /**
     * Subnet mask.
     */
    subnetMask?: string;
}
