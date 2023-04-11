import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkingConfig } from "./networkingconfig";
import { PrivateClusterConfig, PrivateClusterConfigInput } from "./privateclusterconfig";
/**
 * The configuration information for configuring a Private IP Cloud Composer environment.
 */
export declare class PrivateEnvironmentConfigInput extends SpeakeasyBase {
    /**
     * Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.
     */
    cloudComposerConnectionSubnetwork?: string;
    /**
     * Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    cloudComposerNetworkIpv4CidrBlock?: string;
    /**
     * Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block
     */
    cloudSqlIpv4CidrBlock?: string;
    /**
     * Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    enablePrivateEnvironment?: boolean;
    /**
     * Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`.
     */
    enablePrivatelyUsedPublicIps?: boolean;
    /**
     * Configuration options for networking connections in the Composer 2 environment.
     */
    networkingConfig?: NetworkingConfig;
    /**
     * Configuration options for the private GKE cluster in a Cloud Composer environment.
     */
    privateClusterConfig?: PrivateClusterConfigInput;
    /**
     * Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    webServerIpv4CidrBlock?: string;
}
/**
 * The configuration information for configuring a Private IP Cloud Composer environment.
 */
export declare class PrivateEnvironmentConfig extends SpeakeasyBase {
    /**
     * Optional. When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork.
     */
    cloudComposerConnectionSubnetwork?: string;
    /**
     * Optional. The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    cloudComposerNetworkIpv4CidrBlock?: string;
    /**
     * Output only. The IP range reserved for the tenant project's Cloud Composer network. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
     */
    cloudComposerNetworkIpv4ReservedRange?: string;
    /**
     * Optional. The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block
     */
    cloudSqlIpv4CidrBlock?: string;
    /**
     * Optional. If `true`, a Private IP Cloud Composer environment is created. If this field is set to true, `IPAllocationPolicy.use_ip_aliases` must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    enablePrivateEnvironment?: boolean;
    /**
     * Optional. When enabled, IPs from public (non-RFC1918) ranges can be used for `IPAllocationPolicy.cluster_ipv4_cidr_block` and `IPAllocationPolicy.service_ipv4_cidr_block`.
     */
    enablePrivatelyUsedPublicIps?: boolean;
    /**
     * Configuration options for networking connections in the Composer 2 environment.
     */
    networkingConfig?: NetworkingConfig;
    /**
     * Configuration options for the private GKE cluster in a Cloud Composer environment.
     */
    privateClusterConfig?: PrivateClusterConfig;
    /**
     * Optional. The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    webServerIpv4CidrBlock?: string;
    /**
     * Output only. The IP range reserved for the tenant project's App Engine VMs. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
     */
    webServerIpv4ReservedRange?: string;
}
