package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InstanceGroupAutoscalingPolicyConfig
 * Configuration for the size bounds of an instance group, including its proportional size to other groups.
**/
public class InstanceGroupAutoscalingPolicyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxInstances")
    public Integer maxInstances;
    public InstanceGroupAutoscalingPolicyConfig withMaxInstances(Integer maxInstances) {
        this.maxInstances = maxInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minInstances")
    public Integer minInstances;
    public InstanceGroupAutoscalingPolicyConfig withMinInstances(Integer minInstances) {
        this.minInstances = minInstances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weight")
    public Integer weight;
    public InstanceGroupAutoscalingPolicyConfig withWeight(Integer weight) {
        this.weight = weight;
        return this;
    }
}