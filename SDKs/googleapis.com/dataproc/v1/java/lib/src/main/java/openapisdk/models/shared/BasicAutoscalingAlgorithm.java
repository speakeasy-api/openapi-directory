package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BasicAutoscalingAlgorithm
 * Basic algorithm for autoscaling.
**/
public class BasicAutoscalingAlgorithm {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cooldownPeriod")
    public String cooldownPeriod;
    public BasicAutoscalingAlgorithm withCooldownPeriod(String cooldownPeriod) {
        this.cooldownPeriod = cooldownPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkStandaloneConfig")
    public SparkStandaloneAutoscalingConfig sparkStandaloneConfig;
    public BasicAutoscalingAlgorithm withSparkStandaloneConfig(SparkStandaloneAutoscalingConfig sparkStandaloneConfig) {
        this.sparkStandaloneConfig = sparkStandaloneConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yarnConfig")
    public BasicYarnAutoscalingConfig yarnConfig;
    public BasicAutoscalingAlgorithm withYarnConfig(BasicYarnAutoscalingConfig yarnConfig) {
        this.yarnConfig = yarnConfig;
        return this;
    }
}