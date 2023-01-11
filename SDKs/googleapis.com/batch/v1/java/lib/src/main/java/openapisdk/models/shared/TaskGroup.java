package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskGroup
 * A TaskGroup contains one or multiple Tasks that share the same Runnable but with different runtime parameters.
**/
public class TaskGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TaskGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parallelism")
    public String parallelism;
    public TaskGroup withParallelism(String parallelism) {
        this.parallelism = parallelism;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissiveSsh")
    public Boolean permissiveSsh;
    public TaskGroup withPermissiveSsh(Boolean permissiveSsh) {
        this.permissiveSsh = permissiveSsh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requireHostsFile")
    public Boolean requireHostsFile;
    public TaskGroup withRequireHostsFile(Boolean requireHostsFile) {
        this.requireHostsFile = requireHostsFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCount")
    public String taskCount;
    public TaskGroup withTaskCount(String taskCount) {
        this.taskCount = taskCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskCountPerNode")
    public String taskCountPerNode;
    public TaskGroup withTaskCountPerNode(String taskCountPerNode) {
        this.taskCountPerNode = taskCountPerNode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskEnvironments")
    public Environment[] taskEnvironments;
    public TaskGroup withTaskEnvironments(Environment[] taskEnvironments) {
        this.taskEnvironments = taskEnvironments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSpec")
    public TaskSpec taskSpec;
    public TaskGroup withTaskSpec(TaskSpec taskSpec) {
        this.taskSpec = taskSpec;
        return this;
    }
}