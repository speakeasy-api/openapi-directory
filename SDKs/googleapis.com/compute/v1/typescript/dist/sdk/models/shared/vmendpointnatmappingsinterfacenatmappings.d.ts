import { SpeakeasyBase } from "../../../internal/utils";
import { VmEndpointNatMappingsInterfaceNatMappingsNatRuleMappings } from "./vmendpointnatmappingsinterfacenatmappingsnatrulemappings";
/**
 * Contain information of Nat mapping for an interface of this endpoint.
 */
export declare class VmEndpointNatMappingsInterfaceNatMappings extends SpeakeasyBase {
    /**
     * List of all drain IP:port-range mappings assigned to this interface. These ranges are inclusive, that is, both the first and the last ports can be used for NAT. Example: ["2.2.2.2:12345-12355", "1.1.1.1:2234-2234"].
     */
    drainNatIpPortRanges?: string[];
    /**
     * A list of all IP:port-range mappings assigned to this interface. These ranges are inclusive, that is, both the first and the last ports can be used for NAT. Example: ["2.2.2.2:12345-12355", "1.1.1.1:2234-2234"].
     */
    natIpPortRanges?: string[];
    /**
     * Total number of drain ports across all NAT IPs allocated to this interface. It equals to the aggregated port number in the field drain_nat_ip_port_ranges.
     */
    numTotalDrainNatPorts?: number;
    /**
     * Total number of ports across all NAT IPs allocated to this interface. It equals to the aggregated port number in the field nat_ip_port_ranges.
     */
    numTotalNatPorts?: number;
    /**
     * Information about mappings provided by rules in this NAT.
     */
    ruleMappings?: VmEndpointNatMappingsInterfaceNatMappingsNatRuleMappings[];
    /**
     * Alias IP range for this interface endpoint. It will be a private (RFC 1918) IP range. Examples: "10.33.4.55/32", or "192.168.5.0/24".
     */
    sourceAliasIpRange?: string;
    /**
     * Primary IP of the VM for this NIC.
     */
    sourceVirtualIp?: string;
}
