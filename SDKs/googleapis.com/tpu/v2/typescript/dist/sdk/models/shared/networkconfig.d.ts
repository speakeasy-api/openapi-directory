import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Network related configurations.
 */
export declare class NetworkConfig extends SpeakeasyBase {
    /**
     * Allows the TPU node to send and receive packets with non-matching destination or source IPs. This is required if you plan to use the TPU workers to forward routes.
     */
    canIpForward?: boolean;
    /**
     * Indicates that external IP addresses would be associated with the TPU workers. If set to false, the specified subnetwork or network should have Private Google Access enabled.
     */
    enableExternalIps?: boolean;
    /**
     * The name of the network for the TPU node. It must be a preexisting Google Compute Engine network. If none is provided, "default" will be used.
     */
    network?: string;
    /**
     * The name of the subnetwork for the TPU node. It must be a preexisting Google Compute Engine subnetwork. If none is provided, "default" will be used.
     */
    subnetwork?: string;
}
