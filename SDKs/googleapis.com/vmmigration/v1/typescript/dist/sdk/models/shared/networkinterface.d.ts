import { SpeakeasyBase } from "../../../internal/utils";
/**
 * NetworkInterface represents a NIC of a VM.
 */
export declare class NetworkInterface extends SpeakeasyBase {
    /**
     * The external IP to define in the NIC.
     */
    externalIp?: string;
    /**
     * The internal IP to define in the NIC. The formats accepted are: `ephemeral` \ ipv4 address \ a named address resource full path.
     */
    internalIp?: string;
    /**
     * The network to connect the NIC to.
     */
    network?: string;
    /**
     * The subnetwork to connect the NIC to.
     */
    subnetwork?: string;
}
