import { SpeakeasyBase } from "../../../internal/utils";
import { ConfidentialNodes } from "./confidentialnodes";
import { FastSocket } from "./fastsocket";
import { GcfsConfig } from "./gcfsconfig";
import { LinuxNodeConfig } from "./linuxnodeconfig";
import { NetworkTags } from "./networktags";
import { NodeKubeletConfig } from "./nodekubeletconfig";
import { NodeLabels } from "./nodelabels";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { NodePoolLoggingConfig } from "./nodepoolloggingconfig";
import { NodeTaints } from "./nodetaints";
import { ResourceLabels } from "./resourcelabels";
import { UpgradeSettings } from "./upgradesettings";
import { VirtualNIC } from "./virtualnic";
import { WindowsNodeConfig } from "./windowsnodeconfig";
import { WorkloadMetadataConfig } from "./workloadmetadataconfig";
/**
 * SetNodePoolVersionRequest updates the version of a node pool.
 */
export declare class UpdateNodePoolRequest extends SpeakeasyBase {
    /**
     * Required. Deprecated. The name of the cluster to upgrade. This field has been deprecated and replaced by the name field.
     */
    clusterId?: string;
    /**
     * ConfidentialNodes is configuration for the confidential nodes feature, which makes nodes run on confidential VMs.
     */
    confidentialNodes?: ConfidentialNodes;
    /**
     * The current etag of the node pool. If an etag is provided and does not match the current etag of the node pool, update will be blocked and an ABORTED error will be returned.
     */
    etag?: string;
    /**
     * Configuration of Fast Socket feature.
     */
    fastSocket?: FastSocket;
    /**
     * GcfsConfig contains configurations of Google Container File System.
     */
    gcfsConfig?: GcfsConfig;
    /**
     * Configuration of gVNIC feature.
     */
    gvnic?: VirtualNIC;
    /**
     * Required. The desired image type for the node pool. Please see https://cloud.google.com/kubernetes-engine/docs/concepts/node-images for available image types.
     */
    imageType?: string;
    /**
     * Node kubelet configs.
     */
    kubeletConfig?: NodeKubeletConfig;
    /**
     * Collection of node-level [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels).
     */
    labels?: NodeLabels;
    /**
     * Parameters that can be configured on Linux nodes.
     */
    linuxNodeConfig?: LinuxNodeConfig;
    /**
     * The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the node pool's nodes should be located. Changing the locations for a node pool will result in nodes being either created or removed from the node pool, depending on whether locations are being added or removed.
     */
    locations?: string[];
    /**
     * NodePoolLoggingConfig specifies logging configuration for nodepools.
     */
    loggingConfig?: NodePoolLoggingConfig;
    /**
     * The name (project, location, cluster, node pool) of the node pool to update. Specified in the format `projects/* /locations/* /clusters/* /nodePools/*`.
     */
    name?: string;
    /**
     * Parameters for node pool-level network config.
     */
    nodeNetworkConfig?: NodeNetworkConfig;
    /**
     * Required. Deprecated. The name of the node pool to upgrade. This field has been deprecated and replaced by the name field.
     */
    nodePoolId?: string;
    /**
     * Required. The Kubernetes version to change the nodes to (typically an upgrade). Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior: - "latest": picks the highest valid Kubernetes version - "1.X": picks the highest valid patch+gke.N patch in the 1.X version - "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version - "1.X.Y-gke.N": picks an explicit Kubernetes version - "-": picks the Kubernetes master version
     */
    nodeVersion?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Collection of [GCP labels](https://cloud.google.com/resource-manager/docs/creating-managing-labels).
     */
    resourceLabels?: ResourceLabels;
    /**
     * Collection of Compute Engine network tags that can be applied to a node's underlying VM instance. (See `tags` field in [`NodeConfig`](/kubernetes-engine/docs/reference/rest/v1/NodeConfig)).
     */
    tags?: NetworkTags;
    /**
     * Collection of Kubernetes [node taints](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration).
     */
    taints?: NodeTaints;
    /**
     * These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.
     */
    upgradeSettings?: UpgradeSettings;
    /**
     * Parameters that can be configured on Windows nodes. Windows Node Config that define the parameters that will be used to configure the Windows node pool settings
     */
    windowsNodeConfig?: WindowsNodeConfig;
    /**
     * WorkloadMetadataConfig defines the metadata configuration to expose to workloads on the node pool.
     */
    workloadMetadataConfig?: WorkloadMetadataConfig;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
