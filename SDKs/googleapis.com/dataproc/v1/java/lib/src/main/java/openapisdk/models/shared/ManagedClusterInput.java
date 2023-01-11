package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedClusterInput
 * Cluster that is managed by the workflow.
**/
public class ManagedClusterInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public ManagedClusterInput withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("config")
    public ClusterConfigInput config;
    public ManagedClusterInput withConfig(ClusterConfigInput config) {
        this.config = config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public ManagedClusterInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
}