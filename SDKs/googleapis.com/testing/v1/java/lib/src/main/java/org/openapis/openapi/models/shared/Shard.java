/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Shard - Output only. Details about the shard.
 */
public class Shard {
    /**
     * Output only. The total number of shards.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numShards")
    public Integer numShards;

    public Shard withNumShards(Integer numShards) {
        this.numShards = numShards;
        return this;
    }
    
    /**
     * Output only. The index of the shard among all the shards.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shardIndex")
    public Integer shardIndex;

    public Shard withShardIndex(Integer shardIndex) {
        this.shardIndex = shardIndex;
        return this;
    }
    
    /**
     * Test targets for a shard.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("testTargetsForShard")
    public TestTargetsForShard testTargetsForShard;

    public Shard withTestTargetsForShard(TestTargetsForShard testTargetsForShard) {
        this.testTargetsForShard = testTargetsForShard;
        return this;
    }
    
    public Shard(){}
}
