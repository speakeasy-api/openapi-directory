package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobInput
 * The Cloud Batch Job description.
**/
public class JobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allocationPolicy")
    public AllocationPolicy allocationPolicy;
    public JobInput withAllocationPolicy(AllocationPolicy allocationPolicy) {
        this.allocationPolicy = allocationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public JobInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logsPolicy")
    public LogsPolicy logsPolicy;
    public JobInput withLogsPolicy(LogsPolicy logsPolicy) {
        this.logsPolicy = logsPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notifications")
    public JobNotification[] notifications;
    public JobInput withNotifications(JobNotification[] notifications) {
        this.notifications = notifications;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("priority")
    public String priority;
    public JobInput withPriority(String priority) {
        this.priority = priority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobStatus status;
    public JobInput withStatus(JobStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskGroups")
    public TaskGroupInput[] taskGroups;
    public JobInput withTaskGroups(TaskGroupInput[] taskGroups) {
        this.taskGroups = taskGroups;
        return this;
    }
}