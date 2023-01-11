package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_sid")
    public String accountSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withAccountSid(String accountSid) {
        this.accountSid = accountSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity_statistics")
    public Object[] activityStatistics;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withActivityStatistics(Object[] activityStatistics) {
        this.activityStatistics = activityStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_relative_task_age_in_queue")
    public Long longestRelativeTaskAgeInQueue;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withLongestRelativeTaskAgeInQueue(Long longestRelativeTaskAgeInQueue) {
        this.longestRelativeTaskAgeInQueue = longestRelativeTaskAgeInQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_relative_task_sid_in_queue")
    public String longestRelativeTaskSidInQueue;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withLongestRelativeTaskSidInQueue(String longestRelativeTaskSidInQueue) {
        this.longestRelativeTaskSidInQueue = longestRelativeTaskSidInQueue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_task_waiting_age")
    public Long longestTaskWaitingAge;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withLongestTaskWaitingAge(Long longestTaskWaitingAge) {
        this.longestTaskWaitingAge = longestTaskWaitingAge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longest_task_waiting_sid")
    public String longestTaskWaitingSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withLongestTaskWaitingSid(String longestTaskWaitingSid) {
        this.longestTaskWaitingSid = longestTaskWaitingSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task_queue_sid")
    public String taskQueueSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withTaskQueueSid(String taskQueueSid) {
        this.taskQueueSid = taskQueueSid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_by_priority")
    public Object tasksByPriority;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withTasksByPriority(Object tasksByPriority) {
        this.tasksByPriority = tasksByPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tasks_by_status")
    public Object tasksByStatus;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withTasksByStatus(Object tasksByStatus) {
        this.tasksByStatus = tasksByStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_available_workers")
    public Long totalAvailableWorkers;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withTotalAvailableWorkers(Long totalAvailableWorkers) {
        this.totalAvailableWorkers = totalAvailableWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_eligible_workers")
    public Long totalEligibleWorkers;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withTotalEligibleWorkers(Long totalEligibleWorkers) {
        this.totalEligibleWorkers = totalEligibleWorkers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tasks")
    public Long totalTasks;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withTotalTasks(Long totalTasks) {
        this.totalTasks = totalTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace_sid")
    public String workspaceSid;
    public TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics withWorkspaceSid(String workspaceSid) {
        this.workspaceSid = workspaceSid;
        return this;
    }
}