package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Cluster
 * Describes the identifying information, config, and status of a Dataproc cluster
**/
public class Cluster {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public Cluster withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterUuid")
    public String clusterUuid;
    public Cluster withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ClusterConfig config;
    public Cluster withConfig(ClusterConfig config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Cluster withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metrics")
    public ClusterMetrics metrics;
    public Cluster withMetrics(ClusterMetrics metrics) {
        this.metrics = metrics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public Cluster withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ClusterStatus status;
    public Cluster withStatus(ClusterStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusHistory")
    public ClusterStatus[] statusHistory;
    public Cluster withStatusHistory(ClusterStatus[] statusHistory) {
        this.statusHistory = statusHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtualClusterConfig")
    public VirtualClusterConfig virtualClusterConfig;
    public Cluster withVirtualClusterConfig(VirtualClusterConfig virtualClusterConfig) {
        this.virtualClusterConfig = virtualClusterConfig;
        return this;
    }
}