import { SpeakeasyBase } from "../../../internal/utils";
export declare class RouterBgpPeerCustomLearnedIpRange extends SpeakeasyBase {
    /**
     * The Custom Learned Route IP range. Must be a valid CIDR-formatted prefix. If an IP is provided without a subnet mask, it is interpreted as a /32 singular IP range for IPv4, and /128 for IPv6.
     */
    range?: string;
}
