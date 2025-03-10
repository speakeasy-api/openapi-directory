"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import addonsconfig as shared_addonsconfig
from ..shared import authenticatorgroupsconfig as shared_authenticatorgroupsconfig
from ..shared import binaryauthorization as shared_binaryauthorization
from ..shared import clusterautoscaling as shared_clusterautoscaling
from ..shared import clustertelemetry as shared_clustertelemetry
from ..shared import costmanagementconfig as shared_costmanagementconfig
from ..shared import databaseencryption as shared_databaseencryption
from ..shared import defaultsnatstatus as shared_defaultsnatstatus
from ..shared import dnsconfig as shared_dnsconfig
from ..shared import gatewayapiconfig as shared_gatewayapiconfig
from ..shared import gcfsconfig as shared_gcfsconfig
from ..shared import identityserviceconfig as shared_identityserviceconfig
from ..shared import ilbsubsettingconfig as shared_ilbsubsettingconfig
from ..shared import intranodevisibilityconfig as shared_intranodevisibilityconfig
from ..shared import loggingconfig as shared_loggingconfig
from ..shared import masterauthorizednetworksconfig as shared_masterauthorizednetworksconfig
from ..shared import meshcertificates as shared_meshcertificates
from ..shared import monitoringconfig as shared_monitoringconfig
from ..shared import networktags as shared_networktags
from ..shared import nodepoolautoscaling as shared_nodepoolautoscaling
from ..shared import nodepoolloggingconfig as shared_nodepoolloggingconfig
from ..shared import notificationconfig as shared_notificationconfig
from ..shared import podsecuritypolicyconfig as shared_podsecuritypolicyconfig
from ..shared import privateclusterconfig as shared_privateclusterconfig
from ..shared import protectconfig as shared_protectconfig
from ..shared import releasechannel as shared_releasechannel
from ..shared import resourceusageexportconfig as shared_resourceusageexportconfig
from ..shared import serviceexternalipsconfig as shared_serviceexternalipsconfig
from ..shared import shieldednodes as shared_shieldednodes
from ..shared import tpuconfig as shared_tpuconfig
from ..shared import verticalpodautoscaling as shared_verticalpodautoscaling
from ..shared import workloadaltsconfig as shared_workloadaltsconfig
from ..shared import workloadcertificates as shared_workloadcertificates
from ..shared import workloadidentityconfig as shared_workloadidentityconfig
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Any, Optional

class ClusterUpdateDesiredDatapathProviderEnum(str, Enum):
    r"""The desired datapath provider for the cluster."""
    DATAPATH_PROVIDER_UNSPECIFIED = 'DATAPATH_PROVIDER_UNSPECIFIED'
    LEGACY_DATAPATH = 'LEGACY_DATAPATH'
    ADVANCED_DATAPATH = 'ADVANCED_DATAPATH'

class ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum(str, Enum):
    r"""The desired state of IPv6 connectivity to Google Services."""
    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = 'PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED'
    PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED = 'PRIVATE_IPV6_GOOGLE_ACCESS_DISABLED'
    PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE = 'PRIVATE_IPV6_GOOGLE_ACCESS_TO_GOOGLE'
    PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL = 'PRIVATE_IPV6_GOOGLE_ACCESS_BIDIRECTIONAL'

class ClusterUpdateDesiredStackTypeEnum(str, Enum):
    r"""The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type."""
    STACK_TYPE_UNSPECIFIED = 'STACK_TYPE_UNSPECIFIED'
    IPV4 = 'IPV4'
    IPV4_IPV6 = 'IPV4_IPV6'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ClusterUpdate:
    r"""ClusterUpdate describes an update to the cluster. Exactly one update can be applied to a cluster with each request, so at most one field can be provided."""
    
    desired_addons_config: Optional[shared_addonsconfig.AddonsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredAddonsConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality."""  
    desired_authenticator_groups_config: Optional[shared_authenticatorgroupsconfig.AuthenticatorGroupsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredAuthenticatorGroupsConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for returning group information from authenticators."""  
    desired_binary_authorization: Optional[shared_binaryauthorization.BinaryAuthorization] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredBinaryAuthorization'), 'exclude': lambda f: f is None }})
    r"""Configuration for Binary Authorization."""  
    desired_cluster_autoscaling: Optional[shared_clusterautoscaling.ClusterAutoscaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredClusterAutoscaling'), 'exclude': lambda f: f is None }})
    r"""ClusterAutoscaling contains global, per-cluster information required by Cluster Autoscaler to automatically adjust the size of the cluster and create/delete node pools based on the current needs."""  
    desired_cluster_telemetry: Optional[shared_clustertelemetry.ClusterTelemetry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredClusterTelemetry'), 'exclude': lambda f: f is None }})
    r"""Telemetry integration for the cluster."""  
    desired_cost_management_config: Optional[shared_costmanagementconfig.CostManagementConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredCostManagementConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for fine-grained cost management feature."""  
    desired_database_encryption: Optional[shared_databaseencryption.DatabaseEncryption] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredDatabaseEncryption'), 'exclude': lambda f: f is None }})
    r"""Configuration of etcd encryption."""  
    desired_datapath_provider: Optional[ClusterUpdateDesiredDatapathProviderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredDatapathProvider'), 'exclude': lambda f: f is None }})
    r"""The desired datapath provider for the cluster."""  
    desired_default_snat_status: Optional[shared_defaultsnatstatus.DefaultSnatStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredDefaultSnatStatus'), 'exclude': lambda f: f is None }})
    r"""DefaultSnatStatus contains the desired state of whether default sNAT should be disabled on the cluster."""  
    desired_dns_config: Optional[shared_dnsconfig.DNSConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredDnsConfig'), 'exclude': lambda f: f is None }})
    r"""DNSConfig contains the desired set of options for configuring clusterDNS."""  
    desired_enable_private_endpoint: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredEnablePrivateEndpoint'), 'exclude': lambda f: f is None }})
    r"""Enable/Disable private endpoint for the cluster's master."""  
    desired_gateway_api_config: Optional[shared_gatewayapiconfig.GatewayAPIConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredGatewayApiConfig'), 'exclude': lambda f: f is None }})
    r"""GatewayAPIConfig contains the desired config of Gateway API on this cluster."""  
    desired_gcfs_config: Optional[shared_gcfsconfig.GcfsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredGcfsConfig'), 'exclude': lambda f: f is None }})
    r"""GcfsConfig contains configurations of Google Container File System."""  
    desired_identity_service_config: Optional[shared_identityserviceconfig.IdentityServiceConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredIdentityServiceConfig'), 'exclude': lambda f: f is None }})
    r"""IdentityServiceConfig is configuration for Identity Service which allows customers to use external identity providers with the K8S API"""  
    desired_image_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredImageType'), 'exclude': lambda f: f is None }})
    r"""The desired image type for the node pool. NOTE: Set the \\"desired_node_pool\\" field as well."""  
    desired_intra_node_visibility_config: Optional[shared_intranodevisibilityconfig.IntraNodeVisibilityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredIntraNodeVisibilityConfig'), 'exclude': lambda f: f is None }})
    r"""IntraNodeVisibilityConfig contains the desired config of the intra-node visibility on this cluster."""  
    desired_l4ilb_subsetting_config: Optional[shared_ilbsubsettingconfig.ILBSubsettingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredL4ilbSubsettingConfig'), 'exclude': lambda f: f is None }})
    r"""ILBSubsettingConfig contains the desired config of L4 Internal LoadBalancer subsetting on this cluster."""  
    desired_locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredLocations'), 'exclude': lambda f: f is None }})
    r"""The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. This list must always include the cluster's primary zone. Warning: changing cluster locations will update the locations of all node pools and will result in nodes being added and/or removed."""  
    desired_logging_config: Optional[shared_loggingconfig.LoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredLoggingConfig'), 'exclude': lambda f: f is None }})
    r"""LoggingConfig is cluster logging configuration."""  
    desired_logging_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredLoggingService'), 'exclude': lambda f: f is None }})
    r"""The logging service the cluster should use to write logs. Currently available options: * `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model * `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15). * `none` - no logs will be exported from the cluster. If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions."""  
    desired_master: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredMaster'), 'exclude': lambda f: f is None }})
    r"""Master is the configuration for components on master."""  
    desired_master_authorized_networks_config: Optional[shared_masterauthorizednetworksconfig.MasterAuthorizedNetworksConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredMasterAuthorizedNetworksConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs."""  
    desired_master_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredMasterVersion'), 'exclude': lambda f: f is None }})
    r"""The Kubernetes version to change the master to. The only valid value is the latest supported version. Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - \\"latest\\": picks the highest valid Kubernetes version - \\"1.X\\": picks the highest valid patch+gke.N patch in the 1.X version - \\"1.X.Y\\": picks the highest valid gke.N patch in the 1.X.Y version - \\"1.X.Y-gke.N\\": picks an explicit Kubernetes version - \\"-\\": picks the default Kubernetes version"""  
    desired_mesh_certificates: Optional[shared_meshcertificates.MeshCertificates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredMeshCertificates'), 'exclude': lambda f: f is None }})
    r"""Configuration for issuance of mTLS keys and certificates to Kubernetes pods."""  
    desired_monitoring_config: Optional[shared_monitoringconfig.MonitoringConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredMonitoringConfig'), 'exclude': lambda f: f is None }})
    r"""MonitoringConfig is cluster monitoring configuration."""  
    desired_monitoring_service: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredMonitoringService'), 'exclude': lambda f: f is None }})
    r"""The monitoring service the cluster should use to write metrics. Currently available options: * \\"monitoring.googleapis.com/kubernetes\\" - The Cloud Monitoring service with a Kubernetes-native resource model * `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15). * `none` - No metrics will be exported from the cluster. If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions."""  
    desired_node_pool_auto_config_network_tags: Optional[shared_networktags.NetworkTags] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredNodePoolAutoConfigNetworkTags'), 'exclude': lambda f: f is None }})
    r"""Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig))."""  
    desired_node_pool_autoscaling: Optional[shared_nodepoolautoscaling.NodePoolAutoscaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredNodePoolAutoscaling'), 'exclude': lambda f: f is None }})
    r"""NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage."""  
    desired_node_pool_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredNodePoolId'), 'exclude': lambda f: f is None }})
    r"""The node pool to be upgraded. This field is mandatory if \\"desired_node_version\\", \\"desired_image_family\\", \\"desired_node_pool_autoscaling\\", or \\"desired_workload_metadata_config\\" is specified and there is more than one node pool on the cluster."""  
    desired_node_pool_logging_config: Optional[shared_nodepoolloggingconfig.NodePoolLoggingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredNodePoolLoggingConfig'), 'exclude': lambda f: f is None }})
    r"""NodePoolLoggingConfig specifies logging configuration for nodepools."""  
    desired_node_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredNodeVersion'), 'exclude': lambda f: f is None }})
    r"""The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - \\"latest\\": picks the highest valid Kubernetes version - \\"1.X\\": picks the highest valid patch+gke.N patch in the 1.X version - \\"1.X.Y\\": picks the highest valid gke.N patch in the 1.X.Y version - \\"1.X.Y-gke.N\\": picks an explicit Kubernetes version - \\"-\\": picks the Kubernetes master version"""  
    desired_notification_config: Optional[shared_notificationconfig.NotificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredNotificationConfig'), 'exclude': lambda f: f is None }})
    r"""NotificationConfig is the configuration of notifications."""  
    desired_pod_security_policy_config: Optional[shared_podsecuritypolicyconfig.PodSecurityPolicyConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredPodSecurityPolicyConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for the PodSecurityPolicy feature."""  
    desired_private_cluster_config: Optional[shared_privateclusterconfig.PrivateClusterConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredPrivateClusterConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration options for private clusters."""  
    desired_private_ipv6_google_access: Optional[ClusterUpdateDesiredPrivateIpv6GoogleAccessEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredPrivateIpv6GoogleAccess'), 'exclude': lambda f: f is None }})
    r"""The desired state of IPv6 connectivity to Google Services."""  
    desired_protect_config: Optional[shared_protectconfig.ProtectConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredProtectConfig'), 'exclude': lambda f: f is None }})
    r"""ProtectConfig defines the flags needed to enable/disable features for the Protect API."""  
    desired_release_channel: Optional[shared_releasechannel.ReleaseChannel] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredReleaseChannel'), 'exclude': lambda f: f is None }})
    r"""ReleaseChannel indicates which release channel a cluster is subscribed to. Release channels are arranged in order of risk. When a cluster is subscribed to a release channel, Google maintains both the master version and the node version. Node auto-upgrade defaults to true and cannot be disabled."""  
    desired_resource_usage_export_config: Optional[shared_resourceusageexportconfig.ResourceUsageExportConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredResourceUsageExportConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for exporting cluster resource usages."""  
    desired_service_external_ips_config: Optional[shared_serviceexternalipsconfig.ServiceExternalIPsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredServiceExternalIpsConfig'), 'exclude': lambda f: f is None }})
    r"""Config to block services with externalIPs field."""  
    desired_shielded_nodes: Optional[shared_shieldednodes.ShieldedNodes] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredShieldedNodes'), 'exclude': lambda f: f is None }})
    r"""Configuration of Shielded Nodes feature."""  
    desired_stack_type: Optional[ClusterUpdateDesiredStackTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredStackType'), 'exclude': lambda f: f is None }})
    r"""The desired stack type of the cluster. If a stack type is provided and does not match the current stack type of the cluster, update will attempt to change the stack type to the new type."""  
    desired_tpu_config: Optional[shared_tpuconfig.TpuConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredTpuConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for Cloud TPU."""  
    desired_vertical_pod_autoscaling: Optional[shared_verticalpodautoscaling.VerticalPodAutoscaling] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredVerticalPodAutoscaling'), 'exclude': lambda f: f is None }})
    r"""VerticalPodAutoscaling contains global, per-cluster information required by Vertical Pod Autoscaler to automatically adjust the resources of pods controlled by it."""  
    desired_workload_alts_config: Optional[shared_workloadaltsconfig.WorkloadALTSConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredWorkloadAltsConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for direct-path (via ALTS) with workload identity."""  
    desired_workload_certificates: Optional[shared_workloadcertificates.WorkloadCertificates] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredWorkloadCertificates'), 'exclude': lambda f: f is None }})
    r"""Configuration for issuance of mTLS keys and certificates to Kubernetes pods."""  
    desired_workload_identity_config: Optional[shared_workloadidentityconfig.WorkloadIdentityConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('desiredWorkloadIdentityConfig'), 'exclude': lambda f: f is None }})
    r"""Configuration for the use of Kubernetes Service Accounts in GCP IAM policies."""  
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('etag'), 'exclude': lambda f: f is None }})
    r"""The current etag of the cluster. If an etag is provided and does not match the current etag of the cluster, update will be blocked and an ABORTED error will be returned."""  
    