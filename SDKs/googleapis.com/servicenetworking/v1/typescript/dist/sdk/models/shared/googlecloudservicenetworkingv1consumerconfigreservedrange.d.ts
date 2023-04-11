import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Allocated IP address ranges for this private service access connection.
 */
export declare class GoogleCloudServicenetworkingV1ConsumerConfigReservedRange extends SpeakeasyBase {
    /**
     * The starting address of the reserved range. The address must be a valid IPv4 address in the x.x.x.x format. This value combined with the IP prefix length is the CIDR range for the reserved range.
     */
    address?: string;
    /**
     * The prefix length of the reserved range.
     */
    ipPrefixLength?: number;
    /**
     * The name of the reserved range.
     */
    name?: string;
}
