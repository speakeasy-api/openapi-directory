import { SpeakeasyBase } from "../../../internal/utils";
import { AddonsConfig } from "./addonsconfig";
import { AuthenticatorGroupsConfig } from "./authenticatorgroupsconfig";
import { BinaryAuthorization } from "./binaryauthorization";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { ClusterTelemetry } from "./clustertelemetry";
import { CostManagementConfig } from "./costmanagementconfig";
import { DatabaseEncryption } from "./databaseencryption";
import { DefaultSnatStatus } from "./defaultsnatstatus";
import { DNSConfig } from "./dnsconfig";
import { GatewayAPIConfig } from "./gatewayapiconfig";
import { GcfsConfig } from "./gcfsconfig";
import { IdentityServiceConfig } from "./identityserviceconfig";
import { ILBSubsettingConfig } from "./ilbsubsettingconfig";
import { IntraNodeVisibilityConfig } from "./intranodevisibilityconfig";
import { LoggingConfig } from "./loggingconfig";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { MeshCertificates } from "./meshcertificates";
import { MonitoringConfig } from "./monitoringconfig";
import { NetworkTags } from "./networktags";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NotificationConfig } from "./notificationconfig";
import { PodSecurityPolicyConfig } from "./podsecuritypolicyconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ProtectConfig } from "./protectconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ServiceExternalIPsConfig } from "./serviceexternalipsconfig";
import { ShieldedNodes } from "./shieldednodes";
import { TpuConfig } from "./tpuconfig";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadALTSConfig } from "./workloadaltsconfig";
import { WorkloadCertificates } from "./workloadcertificates";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";
/**
 * The desired datapath provider for the cluster.
 */
export declare enum ClusterUpdateDesiredDatapathProviderEnum {
    DatapathProviderUnspecified = "DATAPATH_PROVIDER_UNSPECIFIED",
    LegacyDatapath = "LEGACY_DATAPATH",
    AdvancedDatapath = "ADVANCED_DATAPATH"
}
/**
 * The desired state of IPv6 connectivity to Google Services.
 */
export declare enum ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum {
    PrivateIpv6GoogleAccessUnspecified = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED",
    PrivateIpv6GoogleAccessDisabled = "PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED",
    PrivateIpv6GoogleAccessToGoogle = "PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE",
    PrivateIpv6GoogleAccessBidirectional = "PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL"
}
/**
 * The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type.
 */
export declare enum ClusterUpdateDesiredStackTypeEnum {
    StackTypeUnspecified = "STACK_TYPE_UNSPECIFIED",
    Ipv4 = "IPV4",
    Ipv4Ipv6 = "IPV4_IPV6"
}
/**
 * ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided.
 */
export declare class ClusterUpdate extends SpeakeasyBase {
    /**
     * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
     */
    desiredAddonsConfig?: AddonsConfig;
    /**
     * Configuration for returning group information from authenticators.
     */
    desiredAuthenticatorGroupsConfig?: AuthenticatorGroupsConfig;
    /**
     * Configuration for Binary Authorization.
     */
    desiredBinaryAuthorization?: BinaryAuthorization;
    /**
     * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
     */
    desiredClusterAutoscaling?: ClusterAutoscaling;
    /**
     * Telemetry integration for the cluster.
     */
    desiredClusterTelemetry?: ClusterTelemetry;
    /**
     * Configuration for fine-grained cost management feature.
     */
    desiredCostManagementConfig?: CostManagementConfig;
    /**
     * Configuration of etcd encryption.
     */
    desiredDatabaseEncryption?: DatabaseEncryption;
    /**
     * The desired datapath provider for the cluster.
     */
    desiredDatapathProvider?: ClusterUpdateDesiredDatapathProviderEnum;
    /**
     * DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster.
     */
    desiredDefaultSnatStatus?: DefaultSnatStatus;
    /**
     * DNSConfig contains the desired set of options for configuring clusterDNS.
     */
    desiredDnsConfig?: DNSConfig;
    /**
     * Enable/Disable private endpoint for the cluster's master.
     */
    desiredEnablePrivateEndpoint?: boolean;
    /**
     * GatewayAPIConfig contains the desired config of Gateway API on this cluster.
     */
    desiredGatewayApiConfig?: GatewayAPIConfig;
    /**
     * GcfsConfig contains configurations of Google Container File System.
     */
    desiredGcfsConfig?: GcfsConfig;
    /**
     * IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
     */
    desiredIdentityServiceConfig?: IdentityServiceConfig;
    /**
     * The desired image type for the node pool. NOTE: Set the "desired_node_pool" field as well.
     */
    desiredImageType?: string;
    /**
     * IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster.
     */
    desiredIntraNodeVisibilityConfig?: IntraNodeVisibilityConfig;
    /**
     * ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster.
     */
    desiredL4ilbSubsettingConfig?: ILBSubsettingConfig;
    /**
     * The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed.
     */
    desiredLocations?: string[];
    /**
     * LoggingConfig is cluster logging configuration.
     */
    desiredLoggingConfig?: LoggingConfig;
    /**
     * The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
     */
    desiredLoggingService?: string;
    /**
     * Master is the configuration for components on master.
     */
    desiredMaster?: Record<string, any>;
    /**
     * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
     */
    desiredMasterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    /**
     * The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the default Kubernetes version
     */
    desiredMasterVersion?: string;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    desiredMeshCertificates?: MeshCertificates;
    /**
     * MonitoringConfig is cluster monitoring configuration.
     */
    desiredMonitoringConfig?: MonitoringConfig;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
     */
    desiredMonitoringService?: string;
    /**
     * Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)).
     */
    desiredNodePoolAutoConfigNetworkTags?: NetworkTags;
    /**
     * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
     */
    desiredNodePoolAutoscaling?: NodePoolAutoscaling;
    /**
     * The node pool to be upgraded. This field is mandatory if "desired_node_version", "desired_image_family", "desired_node_pool_autoscaling", or "desired_workload_metadata_config" is specified and there is more than one node pool on the cluster.
     */
    desiredNodePoolId?: string;
    /**
     * NodePoolLoggingConfig specifies logging configuration for nodepools.
     */
    desiredNodePoolLoggingConfig?: NodePoolLoggingConfig;
    /**
     * The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version
     */
    desiredNodeVersion?: string;
    /**
     * NotificationConfig is the configuration of notifications.
     */
    desiredNotificationConfig?: NotificationConfig;
    /**
     * Configuration for the PodSecurityPolicy feature.
     */
    desiredPodSecurityPolicyConfig?: PodSecurityPolicyConfig;
    /**
     * Configuration options for private clusters.
     */
    desiredPrivateClusterConfig?: PrivateClusterConfig;
    /**
     * The desired state of IPv6 connectivity to Google Services.
     */
    desiredPrivateIpv6GoogleAccess?: ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum;
    /**
     * ProtectConfig defines the flags needed to enable/disable features for the Protect API.
     */
    desiredProtectConfig?: ProtectConfig;
    /**
     * ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
     */
    desiredReleaseChannel?: ReleaseChannel;
    /**
     * Configuration for exporting cluster resource usages.
     */
    desiredResourceUsageExportConfig?: ResourceUsageExportConfig;
    /**
     * Config to block services with externalIPs field.
     */
    desiredServiceExternalIpsConfig?: ServiceExternalIPsConfig;
    /**
     * Configuration of Shielded Nodes feature.
     */
    desiredShieldedNodes?: ShieldedNodes;
    /**
     * The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type.
     */
    desiredStackType?: ClusterUpdateDesiredStackTypeEnum;
    /**
     * Configuration for Cloud TPU.
     */
    desiredTpuConfig?: TpuConfig;
    /**
     * VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
     */
    desiredVerticalPodAutoscaling?: VerticalPodAutoscaling;
    /**
     * Configuration for direct-path (via ALTS) with workload identity.
     */
    desiredWorkloadAltsConfig?: WorkloadALTSConfig;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    desiredWorkloadCertificates?: WorkloadCertificates;
    /**
     * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
     */
    desiredWorkloadIdentityConfig?: WorkloadIdentityConfig;
    /**
     * The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
}
