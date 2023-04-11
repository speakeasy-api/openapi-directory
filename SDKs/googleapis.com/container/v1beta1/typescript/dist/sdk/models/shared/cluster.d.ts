import { SpeakeasyBase } from "../../../internal/utils";
import { AddonsConfig } from "./addonsconfig";
import { AuthenticatorGroupsConfig } from "./authenticatorgroupsconfig";
import { Autopilot } from "./autopilot";
import { BinaryAuthorization } from "./binaryauthorization";
import { ClusterAutoscaling } from "./clusterautoscaling";
import { ClusterTelemetry } from "./clustertelemetry";
import { ConfidentialNodes } from "./confidentialnodes";
import { CostManagementConfig } from "./costmanagementconfig";
import { DatabaseEncryption } from "./databaseencryption";
import { Fleet } from "./fleet";
import { IdentityServiceConfig } from "./identityserviceconfig";
import { IPAllocationPolicy, IPAllocationPolicyInput } from "./ipallocationpolicy";
import { LegacyAbac } from "./legacyabac";
import { LoggingConfig } from "./loggingconfig";
import { MaintenancePolicy } from "./maintenancepolicy";
import { MasterAuth } from "./masterauth";
import { MasterAuthorizedNetworksConfig } from "./masterauthorizednetworksconfig";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { MeshCertificates } from "./meshcertificates";
import { MonitoringConfig } from "./monitoringconfig";
import { NetworkConfig } from "./networkconfig";
import { NetworkPolicy } from "./networkpolicy";
import { NodeConfig } from "./nodeconfig";
import { NodePool } from "./nodepool";
import { NodePoolAutoConfig } from "./nodepoolautoconfig";
import { NodePoolDefaults } from "./nodepooldefaults";
import { NotificationConfig } from "./notificationconfig";
import { PodSecurityPolicyConfig } from "./podsecuritypolicyconfig";
import { PrivateClusterConfig } from "./privateclusterconfig";
import { ProtectConfig } from "./protectconfig";
import { ReleaseChannel } from "./releasechannel";
import { ResourceUsageExportConfig } from "./resourceusageexportconfig";
import { ShieldedNodes } from "./shieldednodes";
import { StatusCondition } from "./statuscondition";
import { TpuConfig } from "./tpuconfig";
import { VerticalPodAutoscaling } from "./verticalpodautoscaling";
import { WorkloadALTSConfig } from "./workloadaltsconfig";
import { WorkloadCertificates } from "./workloadcertificates";
import { WorkloadIdentityConfig } from "./workloadidentityconfig";
/**
 * [Output only] The current status of this cluster.
 */
export declare enum ClusterStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    Reconciling = "RECONCILING",
    Stopping = "STOPPING",
    Error = "ERROR",
    Degraded = "DEGRADED"
}
/**
 * A Google Kubernetes Engine cluster.
 */
export declare class Cluster extends SpeakeasyBase {
    /**
     * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
     */
    addonsConfig?: AddonsConfig;
    /**
     * Configuration for returning group information from authenticators.
     */
    authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
    /**
     * Autopilot is the configuration for Autopilot settings on the cluster.
     */
    autopilot?: Autopilot;
    /**
     * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
     */
    autoscaling?: ClusterAutoscaling;
    /**
     * Configuration for Binary Authorization.
     */
    binaryAuthorization?: BinaryAuthorization;
    /**
     * The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
     */
    clusterIpv4Cidr?: string;
    /**
     * Telemetry integration for the cluster.
     */
    clusterTelemetry?: ClusterTelemetry;
    /**
     * Which conditions caused the current cluster state.
     */
    conditions?: StatusCondition[];
    /**
     * ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
     */
    confidentialNodes?: ConfidentialNodes;
    /**
     * Configuration for fine-grained cost management feature.
     */
    costManagementConfig?: CostManagementConfig;
    /**
     * [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string;
    /**
     * [Output only] The current software version of the master endpoint.
     */
    currentMasterVersion?: string;
    /**
     * [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.
     */
    currentNodeCount?: number;
    /**
     * [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.
     */
    currentNodeVersion?: string;
    /**
     * Configuration of etcd encryption.
     */
    databaseEncryption?: DatabaseEncryption;
    /**
     * Constraints applied to pods.
     */
    defaultMaxPodsConstraint?: MaxPodsConstraint;
    /**
     * An optional description of this cluster.
     */
    description?: string;
    /**
     * Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.
     */
    enableKubernetesAlpha?: boolean;
    /**
     * Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead.
     */
    enableTpu?: boolean;
    /**
     * [Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.
     */
    endpoint?: string;
    /**
     * This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    expireTime?: string;
    /**
     * Fleet is the fleet configuration for the cluster.
     */
    fleet?: Fleet;
    /**
     * Output only. Unique id for the cluster.
     */
    id?: string;
    /**
     * IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
     */
    identityServiceConfig?: IdentityServiceConfig;
    /**
     * The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version
     */
    initialClusterVersion?: string;
    /**
     * The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.
     */
    initialNodeCount?: number;
    /**
     * Deprecated. Use node_pools.instance_group_urls.
     */
    instanceGroupUrls?: string[];
    /**
     * Configuration for controlling how IPs are allocated in the cluster.
     */
    ipAllocationPolicy?: IPAllocationPolicy;
    /**
     * The fingerprint of the set of labels for this cluster.
     */
    labelFingerprint?: string;
    /**
     * Configuration for the legacy Attribute Based Access Control authorization mode.
     */
    legacyAbac?: LegacyAbac;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
     */
    location?: string;
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.
     */
    locations?: string[];
    /**
     * LoggingConfig is cluster logging configuration.
     */
    loggingConfig?: LoggingConfig;
    /**
     * The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
     */
    loggingService?: string;
    /**
     * MaintenancePolicy defines the maintenance policy to be used for the cluster.
     */
    maintenancePolicy?: MaintenancePolicy;
    /**
     * Master is the configuration for components on master.
     */
    master?: Record<string, any>;
    /**
     * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
     */
    masterAuth?: MasterAuth;
    /**
     * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
     */
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    /**
     * The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead.
     */
    masterIpv4CidrBlock?: string;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    meshCertificates?: MeshCertificates;
    /**
     * MonitoringConfig is cluster monitoring configuration.
     */
    monitoringConfig?: MonitoringConfig;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
     */
    monitoringService?: string;
    /**
     * The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.
     */
    name?: string;
    /**
     * The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name.
     */
    network?: string;
    /**
     * NetworkConfig reports the relative names of network & subnetwork.
     */
    networkConfig?: NetworkConfig;
    /**
     * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
     */
    networkPolicy?: NetworkPolicy;
    /**
     * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
     */
    nodeConfig?: NodeConfig;
    /**
     * [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.
     */
    nodeIpv4CidrSize?: number;
    /**
     * node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters
     */
    nodePoolAutoConfig?: NodePoolAutoConfig;
    /**
     * Subset of Nodepool message that has defaults.
     */
    nodePoolDefaults?: NodePoolDefaults;
    /**
     * The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.
     */
    nodePools?: NodePool[];
    /**
     * NotificationConfig is the configuration of notifications.
     */
    notificationConfig?: NotificationConfig;
    /**
     * Configuration for the PodSecurityPolicy feature.
     */
    podSecurityPolicyConfig?: PodSecurityPolicyConfig;
    /**
     * If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead.
     */
    privateCluster?: boolean;
    /**
     * Configuration options for private clusters.
     */
    privateClusterConfig?: PrivateClusterConfig;
    /**
     * ProtectConfig defines the flags needed to enable/disable features for the Protect API.
     */
    protectConfig?: ProtectConfig;
    /**
     * ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
     */
    releaseChannel?: ReleaseChannel;
    /**
     * The resource labels for the cluster to use to annotate any related Google Compute Engine resources.
     */
    resourceLabels?: Record<string, string>;
    /**
     * Configuration for exporting cluster resource usages.
     */
    resourceUsageExportConfig?: ResourceUsageExportConfig;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.
     */
    servicesIpv4Cidr?: string;
    /**
     * Configuration of Shielded Nodes feature.
     */
    shieldedNodes?: ShieldedNodes;
    /**
     * [Output only] The current status of this cluster.
     */
    status?: ClusterStatusEnum;
    /**
     * [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.
     */
    statusMessage?: string;
    /**
     * The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name.
     */
    subnetwork?: string;
    /**
     * Configuration for Cloud TPU.
     */
    tpuConfig?: TpuConfig;
    /**
     * [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).
     */
    tpuIpv4CidrBlock?: string;
    /**
     * VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
     */
    verticalPodAutoscaling?: VerticalPodAutoscaling;
    /**
     * Configuration for direct-path (via ALTS) with workload identity.
     */
    workloadAltsConfig?: WorkloadALTSConfig;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    workloadCertificates?: WorkloadCertificates;
    /**
     * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
     */
    workloadIdentityConfig?: WorkloadIdentityConfig;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.
     */
    zone?: string;
}
/**
 * A Google Kubernetes Engine cluster.
 */
export declare class ClusterInput extends SpeakeasyBase {
    /**
     * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
     */
    addonsConfig?: AddonsConfig;
    /**
     * Configuration for returning group information from authenticators.
     */
    authenticatorGroupsConfig?: AuthenticatorGroupsConfig;
    /**
     * Autopilot is the configuration for Autopilot settings on the cluster.
     */
    autopilot?: Autopilot;
    /**
     * ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs.
     */
    autoscaling?: ClusterAutoscaling;
    /**
     * Configuration for Binary Authorization.
     */
    binaryAuthorization?: BinaryAuthorization;
    /**
     * The IP address range of the container pods in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `10.96.0.0/14`). Leave blank to have one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
     */
    clusterIpv4Cidr?: string;
    /**
     * Telemetry integration for the cluster.
     */
    clusterTelemetry?: ClusterTelemetry;
    /**
     * Which conditions caused the current cluster state.
     */
    conditions?: StatusCondition[];
    /**
     * ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
     */
    confidentialNodes?: ConfidentialNodes;
    /**
     * Configuration for fine-grained cost management feature.
     */
    costManagementConfig?: CostManagementConfig;
    /**
     * [Output only] The time the cluster was created, in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string;
    /**
     * [Output only] The current software version of the master endpoint.
     */
    currentMasterVersion?: string;
    /**
     * [Output only] The number of nodes currently in the cluster. Deprecated. Call Kubernetes API directly to retrieve node information.
     */
    currentNodeCount?: number;
    /**
     * [Output only] Deprecated, use [NodePool.version](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1beta1/projects.locations.clusters.nodePools) instead. The current version of the node software components. If they are currently at multiple versions because they're in the process of being upgraded, this reflects the minimum version of all nodes.
     */
    currentNodeVersion?: string;
    /**
     * Configuration of etcd encryption.
     */
    databaseEncryption?: DatabaseEncryption;
    /**
     * Constraints applied to pods.
     */
    defaultMaxPodsConstraint?: MaxPodsConstraint;
    /**
     * An optional description of this cluster.
     */
    description?: string;
    /**
     * Kubernetes alpha features are enabled on this cluster. This includes alpha API groups (e.g. v1beta1) and features that may not be production ready in the kubernetes version of the master and nodes. The cluster has no SLA for uptime and master/node upgrades are disabled. Alpha enabled clusters are automatically deleted thirty days after creation.
     */
    enableKubernetesAlpha?: boolean;
    /**
     * Enable the ability to use Cloud TPUs in this cluster. This field is deprecated, use tpu_config.enabled instead.
     */
    enableTpu?: boolean;
    /**
     * [Output only] The IP address of this cluster's master endpoint. The endpoint can be accessed from the internet at `https://username:password@endpoint/`. See the `masterAuth` property of this resource for username and password information.
     */
    endpoint?: string;
    /**
     * This checksum is computed by the server based on the value of cluster fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * [Output only] The time the cluster will be automatically deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    expireTime?: string;
    /**
     * Fleet is the fleet configuration for the cluster.
     */
    fleet?: Fleet;
    /**
     * IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API
     */
    identityServiceConfig?: IdentityServiceConfig;
    /**
     * The initial Kubernetes version for this cluster. Valid versions are those found in validMasterVersions returned by getServerConfig. The version can be upgraded over time; such upgrades are reflected in currentMasterVersion and currentNodeVersion. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "","-": picks the default Kubernetes version
     */
    initialClusterVersion?: string;
    /**
     * The number of nodes to create in this cluster. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota. For requests, this field should only be used in lieu of a "node_pool" object, since this configuration (along with the "node_config") will be used to create a "NodePool" object with an auto-generated name. Do not use this and a node_pool at the same time. This field is deprecated, use node_pool.initial_node_count instead.
     */
    initialNodeCount?: number;
    /**
     * Deprecated. Use node_pools.instance_group_urls.
     */
    instanceGroupUrls?: string[];
    /**
     * Configuration for controlling how IPs are allocated in the cluster.
     */
    ipAllocationPolicy?: IPAllocationPolicyInput;
    /**
     * The fingerprint of the set of labels for this cluster.
     */
    labelFingerprint?: string;
    /**
     * Configuration for the legacy Attribute Based Access Control authorization mode.
     */
    legacyAbac?: LegacyAbac;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) or [region](https://cloud.google.com/compute/docs/regions-zones/regions-zones#available) in which the cluster resides.
     */
    location?: string;
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This field provides a default value if [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) are not specified during node pool creation. Warning: changing cluster locations will update the [NodePool.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.FIELDS.locations) of all node pools and will result in nodes being added and/or removed.
     */
    locations?: string[];
    /**
     * LoggingConfig is cluster logging configuration.
     */
    loggingConfig?: LoggingConfig;
    /**
     * The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.
     */
    loggingService?: string;
    /**
     * MaintenancePolicy defines the maintenance policy to be used for the cluster.
     */
    maintenancePolicy?: MaintenancePolicy;
    /**
     * Master is the configuration for components on master.
     */
    master?: Record<string, any>;
    /**
     * The authentication information for accessing the master endpoint. Authentication can be done using HTTP basic auth or using client certificates.
     */
    masterAuth?: MasterAuth;
    /**
     * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
     */
    masterAuthorizedNetworksConfig?: MasterAuthorizedNetworksConfig;
    /**
     * The IP prefix in CIDR notation to use for the hosted master network. This prefix will be used for assigning private IP addresses to the master or set of masters, as well as the ILB VIP. This field is deprecated, use private_cluster_config.master_ipv4_cidr_block instead.
     */
    masterIpv4CidrBlock?: string;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    meshCertificates?: MeshCertificates;
    /**
     * MonitoringConfig is cluster monitoring configuration.
     */
    monitoringConfig?: MonitoringConfig;
    /**
     * The monitoring service the cluster should use to write metrics. Currently available options: * "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.
     */
    monitoringService?: string;
    /**
     * The name of this cluster. The name must be unique within this project and location (e.g. zone or region), and can be up to 40 characters with the following restrictions: * Lowercase letters, numbers, and hyphens only. * Must start with a letter. * Must end with a number or a letter.
     */
    name?: string;
    /**
     * The name of the Google Compute Engine [network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks) to which the cluster is connected. If left unspecified, the `default` network will be used. On output this shows the network ID instead of the name.
     */
    network?: string;
    /**
     * NetworkConfig reports the relative names of network & subnetwork.
     */
    networkConfig?: NetworkConfig;
    /**
     * Configuration options for the NetworkPolicy feature. https://kubernetes.io/docs/concepts/services-networking/networkpolicies/
     */
    networkPolicy?: NetworkPolicy;
    /**
     * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
     */
    nodeConfig?: NodeConfig;
    /**
     * [Output only] The size of the address space on each node for hosting containers. This is provisioned from within the `container_ipv4_cidr` range. This field will only be set when cluster is in route-based network mode.
     */
    nodeIpv4CidrSize?: number;
    /**
     * node pool configs that apply to all auto-provisioned node pools in autopilot clusters and node auto-provisioning enabled clusters
     */
    nodePoolAutoConfig?: NodePoolAutoConfig;
    /**
     * Subset of Nodepool message that has defaults.
     */
    nodePoolDefaults?: NodePoolDefaults;
    /**
     * The node pools associated with this cluster. This field should not be set if "node_config" or "initial_node_count" are specified.
     */
    nodePools?: NodePool[];
    /**
     * NotificationConfig is the configuration of notifications.
     */
    notificationConfig?: NotificationConfig;
    /**
     * Configuration for the PodSecurityPolicy feature.
     */
    podSecurityPolicyConfig?: PodSecurityPolicyConfig;
    /**
     * If this is a private cluster setup. Private clusters are clusters that, by default have no external IP addresses on the nodes and where nodes and the master communicate over private IP addresses. This field is deprecated, use private_cluster_config.enable_private_nodes instead.
     */
    privateCluster?: boolean;
    /**
     * Configuration options for private clusters.
     */
    privateClusterConfig?: PrivateClusterConfig;
    /**
     * ProtectConfig defines the flags needed to enable/disable features for the Protect API.
     */
    protectConfig?: ProtectConfig;
    /**
     * ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled.
     */
    releaseChannel?: ReleaseChannel;
    /**
     * The resource labels for the cluster to use to annotate any related Google Compute Engine resources.
     */
    resourceLabels?: Record<string, string>;
    /**
     * Configuration for exporting cluster resource usages.
     */
    resourceUsageExportConfig?: ResourceUsageExportConfig;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output only] The IP address range of the Kubernetes services in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`). Service addresses are typically put in the last `/16` from the container CIDR.
     */
    servicesIpv4Cidr?: string;
    /**
     * Configuration of Shielded Nodes feature.
     */
    shieldedNodes?: ShieldedNodes;
    /**
     * [Output only] The current status of this cluster.
     */
    status?: ClusterStatusEnum;
    /**
     * [Output only] Deprecated. Use conditions instead. Additional information about the current status of this cluster, if available.
     */
    statusMessage?: string;
    /**
     * The name of the Google Compute Engine [subnetwork](https://cloud.google.com/compute/docs/subnetworks) to which the cluster is connected. On output this shows the subnetwork ID instead of the name.
     */
    subnetwork?: string;
    /**
     * Configuration for Cloud TPU.
     */
    tpuConfig?: TpuConfig;
    /**
     * [Output only] The IP address range of the Cloud TPUs in this cluster, in [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) notation (e.g. `1.2.3.4/29`).
     */
    tpuIpv4CidrBlock?: string;
    /**
     * VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it.
     */
    verticalPodAutoscaling?: VerticalPodAutoscaling;
    /**
     * Configuration for direct-path (via ALTS) with workload identity.
     */
    workloadAltsConfig?: WorkloadALTSConfig;
    /**
     * Configuration for issuance of mTLS keys and certificates to Kubernetes pods.
     */
    workloadCertificates?: WorkloadCertificates;
    /**
     * Configuration for the use of Kubernetes Service Accounts in GCP IAM policies.
     */
    workloadIdentityConfig?: WorkloadIdentityConfig;
    /**
     * [Output only] The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field is deprecated, use location instead.
     */
    zone?: string;
}
