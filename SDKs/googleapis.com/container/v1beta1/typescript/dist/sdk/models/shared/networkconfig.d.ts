import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DNSConfig } from "./dnsconfig";
import { GatewayAPIConfig } from "./gatewayapiconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";
/**
 * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
 */
export declare enum NetworkConfigDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED",
    LegacyDatapath = "LEGACY_DATAPATH",
    AdvancedDatapath = "ADVANCED_DATAPATH"
}
/**
 * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4)
 */
export declare enum NetworkConfigPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED",
    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE",
    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}
/**
 * NetworkConfig reports the relative names of network & subnetwork.
 */
export declare class NetworkConfig extends SpeakeasyBase {
    /**
     * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
     */
    datapathProvider?: NetworkConfigDatapathProviderEnum;
    /**
     * DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
     */
    defaultSnatStatus?: DefaultSnatStatus;
    /**
     * DNSConfig contains the desired set of options for configuring clusterDNS.
     */
    dnsConfig?: DNSConfig;
    /**
     * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
     */
    enableIntraNodeVisibility?: boolean;
    /**
     * Whether L4ILB Subsetting is enabled for this cluster.
     */
    enableL4ilbSubsetting?: boolean;
    /**
     * GatewayAPIConfig contains the desired config of Gateway API on this cluster.
     */
    gatewayApiConfig?: GatewayAPIConfig;
    /**
     * Output only. The relative name of the Google Compute Engine network(https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. Example: projects/my-project/global/networks/my-network
     */
    network?: string;
    /**
     * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4)
     */
    privateIpv6GoogleAccess?: NetworkConfigPrivateIpv6GoogleAccessEnum;
    /**
     * Config to block services with externalIPs field.
     */
    serviceExternalIpsConfig?: ServiceExternalIPsConfig;
    /**
     * Output only. The relative name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/vpc) to which the cluster is connected. Example: projects/my-project/regions/us-central1/subnetworks/my-subnet
     */
    subnetwork?: string;
}
