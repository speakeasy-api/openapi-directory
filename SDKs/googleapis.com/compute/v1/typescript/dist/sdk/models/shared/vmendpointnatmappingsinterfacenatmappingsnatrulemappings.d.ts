import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information of NAT Mappings provided by a NAT Rule.
 */
export declare class VmEndpointNatMappingsInterfaceNatMappingsNatRuleMappings extends SpeakeasyBase {
    /**
     * List of all drain IP:port-range mappings assigned to this interface by this rule. These ranges are inclusive, that is, both the first and the last ports can be used for NAT. Example: ["2.2.2.2:12345-12355", "1.1.1.1:2234-2234"].
     */
    drainNatIpPortRanges?: string[];
    /**
     * A list of all IP:port-range mappings assigned to this interface by this rule. These ranges are inclusive, that is, both the first and the last ports can be used for NAT. Example: ["2.2.2.2:12345-12355", "1.1.1.1:2234-2234"].
     */
    natIpPortRanges?: string[];
    /**
     * Total number of drain ports across all NAT IPs allocated to this interface by this rule. It equals the aggregated port number in the field drain_nat_ip_port_ranges.
     */
    numTotalDrainNatPorts?: number;
    /**
     * Total number of ports across all NAT IPs allocated to this interface by this rule. It equals the aggregated port number in the field nat_ip_port_ranges.
     */
    numTotalNatPorts?: number;
    /**
     * Rule number of the NAT Rule.
     */
    ruleNumber?: number;
}
