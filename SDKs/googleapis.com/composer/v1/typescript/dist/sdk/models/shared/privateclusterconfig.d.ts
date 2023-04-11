import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
 */
export declare class PrivateClusterConfigInput extends SpeakeasyBase {
    /**
     * Optional. If `true`, access to the public endpoint of the GKE cluster is denied.
     */
    enablePrivateEndpoint?: boolean;
    /**
     * Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used.
     */
    masterIpv4CidrBlock?: string;
}
/**
 * Configuration options for the private GKE cluster in a Cloud Composer environment.
 */
export declare class PrivateClusterConfig extends SpeakeasyBase {
    /**
     * Optional. If `true`, access to the public endpoint of the GKE cluster is denied.
     */
    enablePrivateEndpoint?: boolean;
    /**
     * Optional. The CIDR block from which IPv4 range for GKE master will be reserved. If left blank, the default value of '172.16.0.0/23' is used.
     */
    masterIpv4CidrBlock?: string;
    /**
     * Output only. The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the GKE cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network.
     */
    masterIpv4ReservedRange?: string;
}
