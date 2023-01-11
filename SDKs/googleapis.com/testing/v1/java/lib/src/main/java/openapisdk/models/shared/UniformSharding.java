package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UniformSharding
 * Uniformly shards test cases given a total number of shards. For instrumentation tests, it will be translated to "-e numShard" and "-e shardIndex" AndroidJUnitRunner arguments. With uniform sharding enabled, specifying either of these sharding arguments via `environment_variables` is invalid. Based on the sharding mechanism AndroidJUnitRunner uses, there is no guarantee that test cases will be distributed uniformly across all shards.
**/
public class UniformSharding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numShards")
    public Integer numShards;
    public UniformSharding withNumShards(Integer numShards) {
        this.numShards = numShards;
        return this;
    }
}