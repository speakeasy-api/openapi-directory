import { SpeakeasyBase } from "../../../internal/utils";
export declare class RouterNatRuleAction extends SpeakeasyBase {
    /**
     * A list of URLs of the IP resources used for this NAT rule. These IP addresses must be valid static external IP addresses assigned to the project. This field is used for public NAT.
     */
    sourceNatActiveIps?: string[];
    /**
     * A list of URLs of the subnetworks used as source ranges for this NAT Rule. These subnetworks must have purpose set to PRIVATE_NAT. This field is used for private NAT.
     */
    sourceNatActiveRanges?: string[];
    /**
     * A list of URLs of the IP resources to be drained. These IPs must be valid static external IPs that have been assigned to the NAT. These IPs should be used for updating/patching a NAT rule only. This field is used for public NAT.
     */
    sourceNatDrainIps?: string[];
    /**
     * A list of URLs of subnetworks representing source ranges to be drained. This is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule. This field is used for private NAT.
     */
    sourceNatDrainRanges?: string[];
}
