import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Secondary IP range of a usable subnetwork.
 */
export declare class UsableSubnetworkSecondaryRange extends SpeakeasyBase {
    /**
     * The range of IP addresses belonging to this subnetwork secondary range.
     */
    ipCidrRange?: string;
    /**
     * The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. The name must be 1-63 characters long, and comply with RFC1035. The name must be unique within the subnetwork.
     */
    rangeName?: string;
}
