import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of a NAT Rule contained in this NAT.
 */
export declare class RouterStatusNatStatusNatRuleStatus extends SpeakeasyBase {
    /**
     * A list of active IPs for NAT. Example: ["1.1.1.1", "179.12.26.133"].
     */
    activeNatIps?: string[];
    /**
     * A list of IPs for NAT that are in drain mode. Example: ["1.1.1.1", "179.12.26.133"].
     */
    drainNatIps?: string[];
    /**
     * The number of extra IPs to allocate. This will be greater than 0 only if the existing IPs in this NAT Rule are NOT enough to allow all configured VMs to use NAT.
     */
    minExtraIpsNeeded?: number;
    /**
     * Number of VM endpoints (i.e., NICs) that have NAT Mappings from this NAT Rule.
     */
    numVmEndpointsWithNatMappings?: number;
    /**
     * Rule number of the rule.
     */
    ruleNumber?: number;
}
