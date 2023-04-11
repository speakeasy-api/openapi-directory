import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateClusterMasterGlobalAccessConfig } from "./privateclustermasterglobalaccessconfig";
/**
 * Configuration options for private clusters.
 */
export declare class PrivateClusterConfig extends SpeakeasyBase {
    /**
     * Whether the master's internal IP address is used as the cluster endpoint.
     */
    enablePrivateEndpoint?: boolean;
    /**
     * Whether nodes have internal IP addresses only. If enabled, all nodes are given only RFC 1918 private addresses and communicate with the master via private networking.
     */
    enablePrivateNodes?: boolean;
    /**
     * Configuration for controlling master global access settings.
     */
    masterGlobalAccessConfig?: PrivateClusterMasterGlobalAccessConfig;
    /**
     * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning internal IP addresses to the master or set of masters, as well as the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network.
     */
    masterIpv4CidrBlock?: string;
    /**
     * Output only. The peering name in the customer VPC used by this cluster.
     */
    peeringName?: string;
    /**
     * Output only. The internal IP address of this cluster's master endpoint.
     */
    privateEndpoint?: string;
    /**
     * Subnet to provision the master's private endpoint during cluster creation. Specified in projects/* /regions/* /subnetworks/* format.
     */
    privateEndpointSubnetwork?: string;
    /**
     * Output only. The external IP address of this cluster's master endpoint.
     */
    publicEndpoint?: string;
}
