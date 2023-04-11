import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a secondary IP range of a subnetwork.
 */
export declare class SubnetworkSecondaryRange extends SpeakeasyBase {
    /**
     * The range of IP addresses belonging to this subnetwork secondary range. Provide this property when you create the subnetwork. Ranges must be unique and non-overlapping with all primary and secondary IP ranges within a network. Only IPv4 is supported. The range can be any range listed in the Valid ranges list.
     */
    ipCidrRange?: string;
    /**
     * The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. The name must be 1-63 characters long, and comply with RFC1035. The name must be unique within the subnetwork.
     */
    rangeName?: string;
    /**
     * The URL of the reserved internal range.
     */
    reservedInternalRange?: string;
}
