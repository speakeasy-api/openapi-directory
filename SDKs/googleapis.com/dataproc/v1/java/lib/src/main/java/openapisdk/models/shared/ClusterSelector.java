package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClusterSelector
 * A selector that chooses target cluster for jobs based on metadata.
**/
public class ClusterSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterLabels")
    public java.util.Map<String, String> clusterLabels;
    public ClusterSelector withClusterLabels(java.util.Map<String, String> clusterLabels) {
        this.clusterLabels = clusterLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zone")
    public String zone;
    public ClusterSelector withZone(String zone) {
        this.zone = zone;
        return this;
    }
}