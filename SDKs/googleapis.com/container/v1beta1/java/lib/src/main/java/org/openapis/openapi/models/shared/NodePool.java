/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * NodePool - NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
 */
public class NodePool {
    /**
     * NodePoolAutoscaling contains information required by cluster autoscaler to adjust the size of the node pool to the current cluster usage.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoscaling")
    public NodePoolAutoscaling autoscaling;

    public NodePool withAutoscaling(NodePoolAutoscaling autoscaling) {
        this.autoscaling = autoscaling;
        return this;
    }
    
    /**
     * Which conditions caused the current node pool state.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conditions")
    public StatusCondition[] conditions;

    public NodePool withConditions(StatusCondition[] conditions) {
        this.conditions = conditions;
        return this;
    }
    
    /**
     * Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public NodeConfig config;

    public NodePool withConfig(NodeConfig config) {
        this.config = config;
        return this;
    }
    
    /**
     * This checksum is computed by the server based on the value of node pool fields, and may be sent on update requests to ensure the client has an up-to-date value before proceeding.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("etag")
    public String etag;

    public NodePool withEtag(String etag) {
        this.etag = etag;
        return this;
    }
    
    /**
     * The initial node count for the pool. You must ensure that your Compute Engine [resource quota](https://cloud.google.com/compute/quotas) is sufficient for this number of instances. You must also have available firewall and routes quota.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initialNodeCount")
    public Integer initialNodeCount;

    public NodePool withInitialNodeCount(Integer initialNodeCount) {
        this.initialNodeCount = initialNodeCount;
        return this;
    }
    
    /**
     * [Output only] The resource URLs of the [managed instance groups](https://cloud.google.com/compute/docs/instance-groups/creating-groups-of-managed-instances) associated with this node pool. During the node pool blue-green upgrade operation, the URLs contain both blue and green resources.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceGroupUrls")
    public String[] instanceGroupUrls;

    public NodePool withInstanceGroupUrls(String[] instanceGroupUrls) {
        this.instanceGroupUrls = instanceGroupUrls;
        return this;
    }
    
    /**
     * The list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the NodePool's nodes should be located. If this value is unspecified during node pool creation, the [Cluster.Locations](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters#Cluster.FIELDS.locations) value will be used, instead. Warning: changing node pool locations will result in nodes being added and/or removed.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locations")
    public String[] locations;

    public NodePool withLocations(String[] locations) {
        this.locations = locations;
        return this;
    }
    
    /**
     * NodeManagement defines the set of node management services turned on for the node pool.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("management")
    public NodeManagement management;

    public NodePool withManagement(NodeManagement management) {
        this.management = management;
        return this;
    }
    
    /**
     * Constraints applied to pods.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPodsConstraint")
    public MaxPodsConstraint maxPodsConstraint;

    public NodePool withMaxPodsConstraint(MaxPodsConstraint maxPodsConstraint) {
        this.maxPodsConstraint = maxPodsConstraint;
        return this;
    }
    
    /**
     * The name of the node pool.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public NodePool withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * Parameters for node pool-level network config.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfig")
    public NodeNetworkConfig networkConfig;

    public NodePool withNetworkConfig(NodeNetworkConfig networkConfig) {
        this.networkConfig = networkConfig;
        return this;
    }
    
    /**
     * PlacementPolicy defines the placement policy used by the node pool.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementPolicy")
    public PlacementPolicy placementPolicy;

    public NodePool withPlacementPolicy(PlacementPolicy placementPolicy) {
        this.placementPolicy = placementPolicy;
        return this;
    }
    
    /**
     * [Output only] The pod CIDR block size per node in this node pool.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("podIpv4CidrSize")
    public Integer podIpv4CidrSize;

    public NodePool withPodIpv4CidrSize(Integer podIpv4CidrSize) {
        this.podIpv4CidrSize = podIpv4CidrSize;
        return this;
    }
    
    /**
     * [Output only] Server-defined URL for the resource.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selfLink")
    public String selfLink;

    public NodePool withSelfLink(String selfLink) {
        this.selfLink = selfLink;
        return this;
    }
    
    /**
     * [Output only] The status of the nodes in this pool instance.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public NodePoolStatusEnum status;

    public NodePool withStatus(NodePoolStatusEnum status) {
        this.status = status;
        return this;
    }
    
    /**
     * [Output only] Deprecated. Use conditions instead. Additional information about the current status of this node pool instance, if available.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;

    public NodePool withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    
    /**
     * UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateInfo")
    public UpdateInfo updateInfo;

    public NodePool withUpdateInfo(UpdateInfo updateInfo) {
        this.updateInfo = updateInfo;
        return this;
    }
    
    /**
     * These upgrade settings configure the upgrade strategy for the node pool. Use strategy to switch between the strategies applied to the node pool. If the strategy is SURGE, use max_surge and max_unavailable to control the level of parallelism and the level of disruption caused by upgrade. 1. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. 2. maxUnavailable controls the number of nodes that can be simultaneously unavailable. 3. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). If the strategy is BLUE_GREEN, use blue_green_settings to configure the blue-green upgrade related settings. 1. standard_rollout_policy is the default policy. The policy is used to control the way blue pool gets drained. The draining is executed in the batch mode. The batch size could be specified as either percentage of the node pool size or the number of nodes. batch_soak_duration is the soak time after each batch gets drained. 2. node_pool_soak_duration is the soak time after all blue nodes are drained. After this period, the blue pool nodes will be deleted.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeSettings")
    public UpgradeSettings upgradeSettings;

    public NodePool withUpgradeSettings(UpgradeSettings upgradeSettings) {
        this.upgradeSettings = upgradeSettings;
        return this;
    }
    
    /**
     * The version of Kubernetes running on this NodePool's nodes. If unspecified, it defaults as described [here](https://cloud.google.com/kubernetes-engine/versioning#specifying_node_version).
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;

    public NodePool withVersion(String version) {
        this.version = version;
        return this;
    }
    
    public NodePool(){}
}
