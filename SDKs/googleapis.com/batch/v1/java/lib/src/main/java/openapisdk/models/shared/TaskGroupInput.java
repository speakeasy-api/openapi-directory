package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskGroupInput
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
public class TaskGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallelism")
    public String parallelism;
    public TaskGroupInput withParallelism(String parallelism) {
        this.parallelism = parallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissiveSsh")
    public Boolean permissiveSsh;
    public TaskGroupInput withPermissiveSsh(Boolean permissiveSsh) {
        this.permissiveSsh = permissiveSsh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireHostsFile")
    public Boolean requireHostsFile;
    public TaskGroupInput withRequireHostsFile(Boolean requireHostsFile) {
        this.requireHostsFile = requireHostsFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCount")
    public String taskCount;
    public TaskGroupInput withTaskCount(String taskCount) {
        this.taskCount = taskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCountPerNode")
    public String taskCountPerNode;
    public TaskGroupInput withTaskCountPerNode(String taskCountPerNode) {
        this.taskCountPerNode = taskCountPerNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskEnvironments")
    public Environment[] taskEnvironments;
    public TaskGroupInput withTaskEnvironments(Environment[] taskEnvironments) {
        this.taskEnvironments = taskEnvironments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSpec")
    public TaskSpec taskSpec;
    public TaskGroupInput withTaskSpec(TaskSpec taskSpec) {
        this.taskSpec = taskSpec;
        return this;
    }
}