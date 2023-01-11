package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskSpec
 * Spec of a task
**/
public class TaskSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computeResource")
    public ComputeResource computeResource;
    public TaskSpec withComputeResource(ComputeResource computeResource) {
        this.computeResource = computeResource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public Environment environment;
    public TaskSpec withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public java.util.Map<String, String> environments;
    public TaskSpec withEnvironments(java.util.Map<String, String> environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lifecyclePolicies")
    public LifecyclePolicy[] lifecyclePolicies;
    public TaskSpec withLifecyclePolicies(LifecyclePolicy[] lifecyclePolicies) {
        this.lifecyclePolicies = lifecyclePolicies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRetryCount")
    public Integer maxRetryCount;
    public TaskSpec withMaxRetryCount(Integer maxRetryCount) {
        this.maxRetryCount = maxRetryCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxRunDuration")
    public String maxRunDuration;
    public TaskSpec withMaxRunDuration(String maxRunDuration) {
        this.maxRunDuration = maxRunDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runnables")
    public Runnable[] runnables;
    public TaskSpec withRunnables(Runnable[] runnables) {
        this.runnables = runnables;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volumes")
    public Volume[] volumes;
    public TaskSpec withVolumes(Volume[] volumes) {
        this.volumes = volumes;
        return this;
    }
}