package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AgentInfo
 * VM Agent Info.
**/
public class AgentInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public AgentInfo withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public AgentInfo withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public AgentInfoStateEnum state;
    public AgentInfo withState(AgentInfoStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskGroupId")
    public String taskGroupId;
    public AgentInfo withTaskGroupId(String taskGroupId) {
        this.taskGroupId = taskGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks")
    public AgentTaskInfo[] tasks;
    public AgentInfo withTasks(AgentTaskInfo[] tasks) {
        this.tasks = tasks;
        return this;
    }
}