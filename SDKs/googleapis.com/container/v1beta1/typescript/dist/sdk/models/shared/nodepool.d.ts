import { SpeakeasyBase } from "../../../internal/utils";
import { MaxPodsConstraint } from "./maxpodsconstraint";
import { NodeConfig } from "./nodeconfig";
import { NodeManagement } from "./nodemanagement";
import { NodeNetworkConfig } from "./nodenetworkconfig";
import { NodePoolAutoscaling } from "./nodepoolautoscaling";
import { PlacementPolicy } from "./placementpolicy";
import { StatusCondition } from "./statuscondition";
import { UpdateInfo } from "./updateinfo";
import { UpgradeSettings } from "./upgradesettings";
/**
 * [Output only] The status of the nodes in this pool instance.
 */
export declare enum NodePoolStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Running = "RUNNING",
    RunningWithError = "RUNNING_WITH_ERROR",
    Reconciling = "RECONCILING",
    Stopping = "STOPPING",
    Error = "ERROR"
}
/**
 * NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
 */
export declare class NodePool extends SpeakeasyBase {
    /**
     * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
     */
    autoscaling?: NodePoolAutoscaling;
    /**
     * Which conditions caused the current node pool state.
     */
    conditions?: StatusCondition[];
    /**
     * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
     */
    config?: NodeConfig;
    /**
     * This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.
     */
    initialNodeCount?: number;
    /**
     * [Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.
     */
    instanceGroupUrls?: string[];
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.
     */
    locations?: string[];
    /**
     * NodeManagement defines the set of node management services turned on for the node pool.
     */
    management?: NodeManagement;
    /**
     * Constraints applied to pods.
     */
    maxPodsConstraint?: MaxPodsConstraint;
    /**
     * The name of the node pool.
     */
    name?: string;
    /**
     * Parameters for node pool-level network config.
     */
    networkConfig?: NodeNetworkConfig;
    /**
     * PlacementPolicy defines the placement policy used by the node pool.
     */
    placementPolicy?: PlacementPolicy;
    /**
     * [Output only] The pod CIDR block size per node in this node pool.
     */
    podIpv4CidrSize?: number;
    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string;
    /**
     * [Output only] The status of the nodes in this pool instance.
     */
    status?: NodePoolStatusEnum;
    /**
     * [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.
     */
    statusMessage?: string;
    /**
     * UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.
     */
    updateInfo?: UpdateInfo;
    /**
     * These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.
     */
    upgradeSettings?: UpgradeSettings;
    /**
     * The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version).
     */
    version?: string;
}
