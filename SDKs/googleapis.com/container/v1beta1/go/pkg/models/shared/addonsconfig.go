// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// AddonsConfig - Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
type AddonsConfig struct {
	// Configuration options for the Cloud Run feature.
	CloudRunConfig *CloudRunConfig `json:"cloudRunConfig,omitempty"`
	// Configuration options for the Config Connector add-on.
	ConfigConnectorConfig *ConfigConnectorConfig `json:"configConnectorConfig,omitempty"`
	// Configuration for NodeLocal DNSCache
	DNSCacheConfig *DNSCacheConfig `json:"dnsCacheConfig,omitempty"`
	// Configuration for the Compute Engine PD CSI driver.
	GcePersistentDiskCsiDriverConfig *GcePersistentDiskCsiDriverConfig `json:"gcePersistentDiskCsiDriverConfig,omitempty"`
	// Configuration for the GCP Filestore CSI driver.
	GcpFilestoreCsiDriverConfig *GcpFilestoreCsiDriverConfig `json:"gcpFilestoreCsiDriverConfig,omitempty"`
	// Configuration for the Cloud Storage Fuse CSI driver.
	GcsFuseCsiDriverConfig *GcsFuseCsiDriverConfig `json:"gcsFuseCsiDriverConfig,omitempty"`
	// Configuration for the Backup for GKE Agent.
	GkeBackupAgentConfig *GkeBackupAgentConfig `json:"gkeBackupAgentConfig,omitempty"`
	// Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
	HorizontalPodAutoscaling *HorizontalPodAutoscaling `json:"horizontalPodAutoscaling,omitempty"`
	// Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
	HTTPLoadBalancing *HTTPLoadBalancing `json:"httpLoadBalancing,omitempty"`
	// Configuration options for Istio addon.
	IstioConfig *IstioConfig `json:"istioConfig,omitempty"`
	// Configuration options for the KALM addon.
	KalmConfig *KalmConfig `json:"kalmConfig,omitempty"`
	// Configuration for the Kubernetes Dashboard.
	KubernetesDashboard *KubernetesDashboard `json:"kubernetesDashboard,omitempty"`
	// Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
	NetworkPolicyConfig *NetworkPolicyConfig `json:"networkPolicyConfig,omitempty"`
}
