package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_task_waiting_age")
    public Long longestTaskWaitingAge;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withLongestTaskWaitingAge(Long longestTaskWaitingAge) {
        this.longestTaskWaitingAge = longestTaskWaitingAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_task_waiting_sid")
    public String longestTaskWaitingSid;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withLongestTaskWaitingSid(String longestTaskWaitingSid) {
        this.longestTaskWaitingSid = longestTaskWaitingSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_by_priority")
    public Object tasksByPriority;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withTasksByPriority(Object tasksByPriority) {
        this.tasksByPriority = tasksByPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_by_status")
    public Object tasksByStatus;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withTasksByStatus(Object tasksByStatus) {
        this.tasksByStatus = tasksByStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tasks")
    public Long totalTasks;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withTotalTasks(Long totalTasks) {
        this.totalTasks = totalTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workflow_sid")
    public String workflowSid;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withWorkflowSid(String workflowSid) {
        this.workflowSid = workflowSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}