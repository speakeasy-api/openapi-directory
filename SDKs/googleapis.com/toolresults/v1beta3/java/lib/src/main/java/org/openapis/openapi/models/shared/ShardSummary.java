/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ShardSummary - Result summary for a shard in an environment.
 */
public class ShardSummary {
    /**
     * Summaries of the steps belonging to the shard. With flaky_test_attempts enabled from TestExecutionService, more than one run (Step) can present. And the runs will be sorted by multistep_number.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runs")
    public java.util.Map<String, Object>[] runs;

    public ShardSummary withRuns(java.util.Map<String, Object>[] runs) {
        this.runs = runs;
        return this;
    }
    
    /**
     * Merged test result for environment. If the environment has only one step (no reruns or shards), then the merged result is the same as the step result. If the environment has multiple shards and/or reruns, then the results of shards and reruns that belong to the same environment are merged into one environment result.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shardResult")
    public MergedResult shardResult;

    public ShardSummary withShardResult(MergedResult shardResult) {
        this.shardResult = shardResult;
        return this;
    }
    
    public ShardSummary(){}
}
