import { SpeakeasyBase } from "../../../internal/utils";
/**
 * cluster_dns indicates which in-cluster DNS provider should be used.
 */
export declare enum DNSConfigClusterDNSEnum {
    ProviderUnspecified = "PROVIDER_UNSPECIFIED",
    PlatformDefault = "PLATFORM_DEFAULT",
    CloudDns = "CLOUD_DNS"
}
/**
 * cluster_dns_scope indicates the scope of access to cluster DNS records.
 */
export declare enum DNSConfigClusterDNSScopeEnum {
    DnsScopeUnspecified = "DNS_SCOPE_UNSPECIFIED",
    ClusterScope = "CLUSTER_SCOPE",
    VpcScope = "VPC_SCOPE"
}
/**
 * DNSConfig contains the desired set of options for configuring clusterDNS.
 */
export declare class DNSConfig extends SpeakeasyBase {
    /**
     * cluster_dns indicates which in-cluster DNS provider should be used.
     */
    clusterDns?: DNSConfigClusterDNSEnum;
    /**
     * cluster_dns_domain is the suffix used for all cluster service records.
     */
    clusterDnsDomain?: string;
    /**
     * cluster_dns_scope indicates the scope of access to cluster DNS records.
     */
    clusterDnsScope?: DNSConfigClusterDNSScopeEnum;
}
