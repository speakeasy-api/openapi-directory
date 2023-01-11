package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ShardingOption
 * Options for enabling sharding.
**/
public class ShardingOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manualSharding")
    public ManualSharding manualSharding;
    public ShardingOption withManualSharding(ManualSharding manualSharding) {
        this.manualSharding = manualSharding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniformSharding")
    public UniformSharding uniformSharding;
    public ShardingOption withUniformSharding(UniformSharding uniformSharding) {
        this.uniformSharding = uniformSharding;
        return this;
    }
}