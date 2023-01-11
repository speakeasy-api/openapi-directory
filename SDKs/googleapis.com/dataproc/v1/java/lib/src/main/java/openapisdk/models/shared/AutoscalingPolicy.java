package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AutoscalingPolicy
 * Describes an autoscaling policy for Dataproc cluster autoscaler.
**/
public class AutoscalingPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicAlgorithm")
    public BasicAutoscalingAlgorithm basicAlgorithm;
    public AutoscalingPolicy withBasicAlgorithm(BasicAutoscalingAlgorithm basicAlgorithm) {
        this.basicAlgorithm = basicAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AutoscalingPolicy withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public AutoscalingPolicy withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AutoscalingPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryWorkerConfig")
    public InstanceGroupAutoscalingPolicyConfig secondaryWorkerConfig;
    public AutoscalingPolicy withSecondaryWorkerConfig(InstanceGroupAutoscalingPolicyConfig secondaryWorkerConfig) {
        this.secondaryWorkerConfig = secondaryWorkerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workerConfig")
    public InstanceGroupAutoscalingPolicyConfig workerConfig;
    public AutoscalingPolicy withWorkerConfig(InstanceGroupAutoscalingPolicyConfig workerConfig) {
        this.workerConfig = workerConfig;
        return this;
    }
}