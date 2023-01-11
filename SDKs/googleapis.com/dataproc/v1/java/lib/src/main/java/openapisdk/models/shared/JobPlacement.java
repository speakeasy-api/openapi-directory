package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobPlacement
 * Dataproc job config.
**/
public class JobPlacement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterLabels")
    public java.util.Map<String, String> clusterLabels;
    public JobPlacement withClusterLabels(java.util.Map<String, String> clusterLabels) {
        this.clusterLabels = clusterLabels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterName")
    public String clusterName;
    public JobPlacement withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterUuid")
    public String clusterUuid;
    public JobPlacement withClusterUuid(String clusterUuid) {
        this.clusterUuid = clusterUuid;
        return this;
    }
}