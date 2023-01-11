package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Shard
 * Output only. Details about the shard.
**/
public class Shard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numShards")
    public Integer numShards;
    public Shard withNumShards(Integer numShards) {
        this.numShards = numShards;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shardIndex")
    public Integer shardIndex;
    public Shard withShardIndex(Integer shardIndex) {
        this.shardIndex = shardIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTargetsForShard")
    public TestTargetsForShard testTargetsForShard;
    public Shard withTestTargetsForShard(TestTargetsForShard testTargetsForShard) {
        this.testTargetsForShard = testTargetsForShard;
        return this;
    }
}