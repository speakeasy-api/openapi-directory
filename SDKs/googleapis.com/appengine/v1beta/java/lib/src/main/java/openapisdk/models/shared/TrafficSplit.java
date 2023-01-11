package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrafficSplit
 * Traffic routing configuration for versions within a single service. Traffic splits define how traffic directed to the service is assigned to versions.
**/
public class TrafficSplit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocations")
    public java.util.Map<String, Double> allocations;
    public TrafficSplit withAllocations(java.util.Map<String, Double> allocations) {
        this.allocations = allocations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shardBy")
    public TrafficSplitShardByEnum shardBy;
    public TrafficSplit withShardBy(TrafficSplitShardByEnum shardBy) {
        this.shardBy = shardBy;
        return this;
    }
}