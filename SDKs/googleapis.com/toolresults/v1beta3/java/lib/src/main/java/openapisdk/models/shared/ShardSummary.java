package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShardSummary
 * Result summary for a shard in an environment.
**/
public class ShardSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runs")
    public java.util.Map<String, Object>[] runs;
    public ShardSummary withRuns(java.util.Map<String, Object>[] runs) {
        this.runs = runs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shardResult")
    public MergedResult shardResult;
    public ShardSummary withShardResult(MergedResult shardResult) {
        this.shardResult = shardResult;
        return this;
    }
}