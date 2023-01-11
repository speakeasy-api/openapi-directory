package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NodeConfig
 * Configuration for the connection.
**/
public class NodeConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxNodeCount")
    public Integer maxNodeCount;
    public NodeConfig withMaxNodeCount(Integer maxNodeCount) {
        this.maxNodeCount = maxNodeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minNodeCount")
    public Integer minNodeCount;
    public NodeConfig withMinNodeCount(Integer minNodeCount) {
        this.minNodeCount = minNodeCount;
        return this;
    }
}