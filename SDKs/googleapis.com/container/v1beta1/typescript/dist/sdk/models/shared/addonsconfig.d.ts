import { SpeakeasyBase } from "../../../internal/utils";
import { CloudRunConfig } from "./cloudrunconfig";
import { ConfigConnectorConfig } from "./configconnectorconfig";
import { DnsCacheConfig } from "./dnscacheconfig";
import { GcePersistentDiskCsiDriverConfig } from "./gcepersistentdiskcsidriverconfig";
import { GcpFilestoreCsiDriverConfig } from "./gcpfilestorecsidriverconfig";
import { GkeBackupAgentConfig } from "./gkebackupagentconfig";
import { HorizontalPodAutoscaling } from "./horizontalpodautoscaling";
import { HttpLoadBalancing } from "./httploadbalancing";
import { IstioConfig } from "./istioconfig";
import { KalmConfig } from "./kalmconfig";
import { KubernetesDashboard } from "./kubernetesdashboard";
import { NetworkPolicyConfig } from "./networkpolicyconfig";
/**
 * Configuration for the addons that can be automatically spun up in the cluster, enabling additional functionality.
 */
export declare class AddonsConfig extends SpeakeasyBase {
    /**
     * Configuration options for the Cloud Run feature.
     */
    cloudRunConfig?: CloudRunConfig;
    /**
     * Configuration options for the Config Connector add-on.
     */
    configConnectorConfig?: ConfigConnectorConfig;
    /**
     * Configuration for NodeLocal DNSCache
     */
    dnsCacheConfig?: DnsCacheConfig;
    /**
     * Configuration for the Compute Engine PD CSI driver.
     */
    gcePersistentDiskCsiDriverConfig?: GcePersistentDiskCsiDriverConfig;
    /**
     * Configuration for the GCP Filestore CSI driver.
     */
    gcpFilestoreCsiDriverConfig?: GcpFilestoreCsiDriverConfig;
    /**
     * Configuration for the Backup for GKE Agent.
     */
    gkeBackupAgentConfig?: GkeBackupAgentConfig;
    /**
     * Configuration options for the horizontal pod autoscaling feature, which increases or decreases the number of replica pods a replication controller has based on the resource usage of the existing pods.
     */
    horizontalPodAutoscaling?: HorizontalPodAutoscaling;
    /**
     * Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.
     */
    httpLoadBalancing?: HttpLoadBalancing;
    /**
     * Configuration options for Istio addon.
     */
    istioConfig?: IstioConfig;
    /**
     * Configuration options for the KALM addon.
     */
    kalmConfig?: KalmConfig;
    /**
     * Configuration for the Kubernetes Dashboard.
     */
    kubernetesDashboard?: KubernetesDashboard;
    /**
     * Configuration for NetworkPolicy. This only tracks whether the addon is enabled or not on the Master, it does not track whether network policy is enabled for the nodes.
     */
    networkPolicyConfig?: NetworkPolicyConfig;
}
