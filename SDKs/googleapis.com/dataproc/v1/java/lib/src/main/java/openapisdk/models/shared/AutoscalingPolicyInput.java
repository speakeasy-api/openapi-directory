package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoscalingPolicyInput
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
**/
public class AutoscalingPolicyInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAlgorithm")
    public BasicAutoscalingAlgorithm basicAlgorithm;
    public AutoscalingPolicyInput withBasicAlgorithm(BasicAutoscalingAlgorithm basicAlgorithm) {
        this.basicAlgorithm = basicAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AutoscalingPolicyInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public AutoscalingPolicyInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryWorkerConfig")
    public InstanceGroupAutoscalingPolicyConfig secondaryWorkerConfig;
    public AutoscalingPolicyInput withSecondaryWorkerConfig(InstanceGroupAutoscalingPolicyConfig secondaryWorkerConfig) {
        this.secondaryWorkerConfig = secondaryWorkerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerConfig")
    public InstanceGroupAutoscalingPolicyConfig workerConfig;
    public AutoscalingPolicyInput withWorkerConfig(InstanceGroupAutoscalingPolicyConfig workerConfig) {
        this.workerConfig = workerConfig;
        return this;
    }
}