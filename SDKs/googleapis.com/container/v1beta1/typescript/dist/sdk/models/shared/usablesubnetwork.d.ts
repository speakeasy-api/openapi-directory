import { SpeakeasyBase } from "../../../internal/utils";
import { UsableSubnetworkSecondaryRange } from "./usablesubnetworksecondaryrange";
/**
 * UsableSubnetwork resource returns the subnetwork name, its associated network and the primary CIDR range.
 */
export declare class UsableSubnetwork extends SpeakeasyBase {
    /**
     * The range of internal addresses that are owned by this subnetwork.
     */
    ipCidrRange?: string;
    /**
     * Network Name. Example: projects/my-project/global/networks/my-network
     */
    network?: string;
    /**
     * Secondary IP ranges.
     */
    secondaryIpRanges?: UsableSubnetworkSecondaryRange[];
    /**
     * A human readable status message representing the reasons for cases where the caller cannot use the secondary ranges under the subnet. For example if the secondary_ip_ranges is empty due to a permission issue, an insufficient permission message will be given by status_message.
     */
    statusMessage?: string;
    /**
     * Subnetwork Name. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
     */
    subnetwork?: string;
}
