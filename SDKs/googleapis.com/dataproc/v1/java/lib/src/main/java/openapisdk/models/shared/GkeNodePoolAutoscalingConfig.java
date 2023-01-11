package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GkeNodePoolAutoscalingConfig
 * GkeNodePoolAutoscaling contains information the cluster autoscaler needs to adjust the size of the node pool to the current cluster usage.
**/
public class GkeNodePoolAutoscalingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNodeCount")
    public Integer maxNodeCount;
    public GkeNodePoolAutoscalingConfig withMaxNodeCount(Integer maxNodeCount) {
        this.maxNodeCount = maxNodeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minNodeCount")
    public Integer minNodeCount;
    public GkeNodePoolAutoscalingConfig withMinNodeCount(Integer minNodeCount) {
        this.minNodeCount = minNodeCount;
        return this;
    }
}