package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobPlacementInput
 * Dataproc job config.
**/
public class JobPlacementInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterLabels")
    public java.util.Map<String, String> clusterLabels;
    public JobPlacementInput withClusterLabels(java.util.Map<String, String> clusterLabels) {
        this.clusterLabels = clusterLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public JobPlacementInput withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
}