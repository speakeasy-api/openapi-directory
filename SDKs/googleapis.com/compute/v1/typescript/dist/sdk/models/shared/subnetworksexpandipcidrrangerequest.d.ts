import { SpeakeasyBase } from "../../../internal/utils";
export declare class SubnetworksExpandIpCidrRangeRequest extends SpeakeasyBase {
    /**
     * The IP (in CIDR format or netmask) of internal addresses that are legal on this Subnetwork. This range should be disjoint from other subnetworks within this network. This range can only be larger than (i.e. a superset of) the range previously defined before the update.
     */
    ipCidrRange?: string;
}
