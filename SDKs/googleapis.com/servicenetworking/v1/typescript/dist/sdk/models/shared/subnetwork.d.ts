import { SpeakeasyBase } from "../../../internal/utils";
import { SecondaryIpRange } from "./secondaryiprange";
/**
 * Represents a subnet that was created or discovered by a private access management service.
 */
export declare class Subnetwork extends SpeakeasyBase {
    /**
     * Subnetwork CIDR range in `10.x.x.x/y` format.
     */
    ipCidrRange?: string;
    /**
     * Subnetwork name. See https://cloud.google.com/compute/docs/vpc/
     */
    name?: string;
    /**
     * In the Shared VPC host project, the VPC network that's peered with the consumer network. For example: `projects/1234321/global/networks/host-network`
     */
    network?: string;
    /**
     * This is a discovered subnet that is not within the current consumer allocated ranges.
     */
    outsideAllocation?: boolean;
    /**
     * GCP region where the subnetwork is located.
     */
    region?: string;
    /**
     * List of secondary IP ranges in this subnetwork.
     */
    secondaryIpRanges?: SecondaryIpRange[];
}
