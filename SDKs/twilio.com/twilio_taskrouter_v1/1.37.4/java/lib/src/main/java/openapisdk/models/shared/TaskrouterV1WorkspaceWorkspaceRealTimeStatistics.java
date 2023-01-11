package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskrouterV1WorkspaceWorkspaceRealTimeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_statistics")
    public Object[] activityStatistics;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withActivityStatistics(Object[] activityStatistics) {
        this.activityStatistics = activityStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_task_waiting_age")
    public Long longestTaskWaitingAge;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withLongestTaskWaitingAge(Long longestTaskWaitingAge) {
        this.longestTaskWaitingAge = longestTaskWaitingAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_task_waiting_sid")
    public String longestTaskWaitingSid;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withLongestTaskWaitingSid(String longestTaskWaitingSid) {
        this.longestTaskWaitingSid = longestTaskWaitingSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_by_priority")
    public Object tasksByPriority;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withTasksByPriority(Object tasksByPriority) {
        this.tasksByPriority = tasksByPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_by_status")
    public Object tasksByStatus;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withTasksByStatus(Object tasksByStatus) {
        this.tasksByStatus = tasksByStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tasks")
    public Long totalTasks;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withTotalTasks(Long totalTasks) {
        this.totalTasks = totalTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_workers")
    public Long totalWorkers;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withTotalWorkers(Long totalWorkers) {
        this.totalWorkers = totalWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkspaceRealTimeStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}